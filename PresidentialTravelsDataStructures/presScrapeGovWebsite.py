import requests
from bs4 import BeautifulSoup
import csv
from geopy.geocoders import OpenCage
import re

# OpenCage API Key (Replace with your own key)
OPENCAGE_API_KEY = ""
geolocator = OpenCage(OPENCAGE_API_KEY)

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
        url = "https://history.state.gov/departmenthistory/travels/president/hoover-herbert-c"

        # Fetch HTML content from the webpage
        response = requests.get(url)
        response.raise_for_status()

        # Parse the HTML content using BeautifulSoup
        soup = BeautifulSoup(response.text, 'html.parser')

        # Initialize CSV file with headers
        with open("hoover_travels_with_coords.csv", "w", newline='', encoding="utf-8") as csvfile:
            fieldnames = ["Date", "Country", "Location", "Details", "Year", "Latitude", "Longitude"]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()

            # Find all the tables with class 'wikitable' (which represent the trips)
            table = soup.find('table', {'class': 'hsg-table-default'})
            rows = table.find_all('tr')[1:]  # Skip the header row
            for row in rows:
                cols = row.find_all('td')
                date = cols[3].get_text(strip=True)
                country = cols[0].get_text(strip=True)
                location = cols[1].get_text(strip=True)
                details = cols[2].get_text(strip=True)
                year = extract_year(date)  # Extract year from the date
                latitude, longitude = get_coordinates(location, country)  # Get coordinates

                writer.writerow({
                    "Date": date,
                    "Country": "USA",
                    "Location": "Washington, DC",
                    "Details": "Start in DC",
                    "Year": year,
                    "Latitude": 38.9072,
                    "Longitude": -77.0369
                })
                
                locations = [loc.strip() for loc in location.split(',')]

                # Write data for each location
                for loc in locations:
                    lat, lng = get_coordinates(loc, country)
                    if lat is not None and lng is not None:
                        writer.writerow({
                            "Date": date,
                            "Country": country,
                            "Location": loc,
                            "Details": details,
                            "Year": year,
                            "Latitude": lat,
                            "Longitude": lng
                        })
        
        print("✅ CSV file saved as teddy_travels_with_coords.csv")

    except Exception as e:
        print(f"❌ Error occurred during the scraping process: {e}")

# Run the function
scrape_and_save_csv()