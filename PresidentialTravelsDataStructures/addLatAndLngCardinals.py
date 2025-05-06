import csv
from geopy.geocoders import OpenCage
from geopy.distance import geodesic
import re
import os
from dotenv import load_dotenv
from pathlib import Path
import time

# Load environment variables
load_dotenv()
API_KEY = os.getenv("OPENCAGE_API_KEY")

# Set up geocoder
geolocator = OpenCage(API_KEY)

# Paths
input_file = Path("CardinalsNamesAndCity.csv")
output_file = Path("updated_with_latlng_and_distance.csv")

# Helper: clean country string like "Mongolia[o]" -> "Mongolia"
def clean_country(country):
    return re.sub(r'\[.*?\]', '', country).strip()

# Vatican City coordinates (Lat, Lng)
vatican_coords = (41.9029, 12.4534)

# Process CSV
with input_file.open(newline='', encoding='utf-8') as infile, output_file.open('w', newline='', encoding='utf-8') as outfile:
    reader = csv.DictReader(infile)  # default delimiter is ','
    fieldnames = reader.fieldnames + ['DistanceToVatican', 'CardinalLabel']  # Add new columns
    writer = csv.DictWriter(outfile, fieldnames=fieldnames)
    writer.writeheader()

    for row in reader:
        city = row.get('City', '').strip()
        country = clean_country(row.get('Country', ''))
        lat = row.get('Lat', '').strip()
        lng = row.get('Lng', '').strip()

        # Generate the Cardinal label
        cardinal_name = row.get('Name', 'Unknown Name')
        cardinal_office = row.get('Office', 'Unknown Office')
        row['CardinalLabel'] = f"Cardinal {cardinal_name}: {cardinal_office}"

        # If the coordinates are missing, attempt geocoding
        if not lat or not lng:
            try:
                location = geolocator.geocode(f"{city}, {country}", exactly_one=True)
                if location:
                    row['Lat'] = location.latitude
                    row['Lng'] = location.longitude
                    print(f"Geocoded: {city}, {country} → {location.latitude}, {location.longitude}")
                else:
                    print(f"Not found: {city}, {country}")
            except Exception as e:
                print(f"Error geocoding {city}, {country}: {e}")

        # Calculate the distance to Vatican City if latitude and longitude are available
        if row.get('Lat') and row.get('Lng'):
            city_coords = (float(row['Lat']), float(row['Lng']))
            distance = geodesic(city_coords, vatican_coords).kilometers
            row['DistanceToVatican'] = round(distance, 2)  # Round to 2 decimal places
        else:
            row['DistanceToVatican'] = 'N/A'  # If no coordinates, set as N/A

        writer.writerow(row)
