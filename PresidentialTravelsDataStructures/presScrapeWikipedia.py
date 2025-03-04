import requests
from bs4 import BeautifulSoup
import csv
from geopy.geocoders import OpenCage
import re
import os
from dotenv import load_dotenv
from pathlib import Path

# Specify the path to your .env file
dotenv_path = Path('../.env')

# Load the environment variables from the .env file
load_dotenv(dotenv_path=dotenv_path)

# Access the API key using os.getenv()
api_key = os.getenv("OPENCAGE_API_KEY")
geolocator = OpenCage(api_key)

# Function to get latitude and longitude from OpenCage API
def get_coordinates(city, country):
    print("Getting coordinates for, ", city)
    try:
        query = f"{city}, {country}"
        result = geolocator.geocode(query)
        if result:
            return result.latitude, result.longitude
    except Exception as e:
        print(f"❌ Error fetching coordinates for {city}, {country}: {e}")
    return None, None  # Return None if not found

# Function to extract year from date
def extract_year(date_str):
    # Regex to match year in the date (assuming year is always 4 digits at the end)
    match = re.search(r'(\d{4})$', date_str)
    if match:
        return match.group(1)  # Return the matched year
    return ""  # Return empty string if no year found

def scrape_and_save_csv():
    try:
        # URL of the webpage (Jimmy Carter's international trips)
        url = "https://en.wikipedia.org/wiki/List_of_international_presidential_trips_made_by_Joe_Biden"

        # Fetch HTML content from the webpage
        response = requests.get(url)
        response.raise_for_status()

        # Parse the HTML content using BeautifulSoup
        soup = BeautifulSoup(response.text, 'html.parser')

        # Initialize CSV file with headers
        with open("biden_travels_with_coords.csv", "w", newline='', encoding="utf-8") as csvfile:
            fieldnames = ["Trip Number", "Date", "Country", "Location", "Details", "Year", "Latitude", "Longitude"]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()

            # Find all the tables with class 'wikitable' (which represent the trips)
            tables = soup.find_all('table', {'class': 'wikitable'})

            for table in tables:
                # Get the year from the previous heading (or caption) of each table
                year_header = table.find_previous(['h2', 'caption'])
                year = ""
                if year_header:
                    year_text = year_header.get_text(strip=True)
                    year = extract_year(year_text)

                # Extract rows from the table (excluding the header row)
                rows = table.find_all('tr')[1:]  # Skip the header row

                trip_number = None  # To hold the current trip number

                for row in rows:
                    cols = row.find_all('td')

                    if len(cols) == 5:  # Row with 5 columns
                        date = cols[2].get_text(strip=True)
                        country = cols[0].get_text(strip=True)
                        location = cols[1].get_text(strip=True)
                        details = cols[3].get_text(strip=True)
                    elif len(cols) == 6:  # Row with 6 columns (contains trip number)
                        trip_number = cols[0].get_text(strip=True)
                        date = cols[3].get_text(strip=True)
                        country = cols[1].get_text(strip=True)
                        location = cols[2].get_text(strip=True)
                        details = cols[4].get_text(strip=True)

                        # Write data for the trip with the current trip number
                        writer.writerow({
                            "Trip Number": trip_number,
                            "Date": date,
                            "Country": "USA",
                            "Location": "Washington, DC",
                            "Details": "Start in DC",
                            "Year": year,
                            "Latitude": 38.9072,
                            "Longitude": -77.0369
                        })


                    # If location contains multiple places (separated by commas), split into multiple rows
                    locations = [loc.strip() for loc in location.split(',')]

                    # Write data for each location
                    for loc in locations:
                        lat, lng = get_coordinates(loc, country)
                        if lat is not None and lng is not None:
                            writer.writerow({
                                "Trip Number": trip_number,
                                "Date": date,
                                "Country": country,
                                "Location": loc,
                                "Details": details,
                                "Year": year,
                                "Latitude": lat,
                                "Longitude": lng
                            })

        print("✅ CSV file saved as biden_travels_with_coords.csv")

    except Exception as e:
        print(f"❌ Error occurred during the scraping process: {e}")

# Run the function
scrape_and_save_csv()
