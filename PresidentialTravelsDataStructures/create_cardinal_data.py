import csv
from pathlib import Path

# Input/output paths
input_csv = Path("updated_with_latlng_and_distance.csv")
output_js = Path("cardinals.js")

# Vatican City coordinates
VATICAN_LAT = 41.9029
VATICAN_LNG = 12.4534

# Open files
with input_csv.open(newline='', encoding='utf-8') as infile, output_js.open('w', encoding='utf-8') as jsfile:
    reader = csv.DictReader(infile)

    # Prepare structures
    cardinal_cities = []
    cardinal_travels = []

    for row in reader:
        try:
            lat = float(row['Lat'])
            print(lat)
            lng = float(row['Lng'])
            print(lng)
            city_name = (
                row['City']
                .strip()
                .replace('"', '\\"')
                .replace("(", "\\(")
                .replace(")", "\\)")
            )
            print(city_name)
            distance = float(row['DistanceToVatican'])  # Ensure it's numeric
            print(distance)
            cardinal_label = (
                row['CardinalLabel']
                .strip()
                .replace('"', '\\"')
                .replace("(", "\\(")
                .replace(")", "\\)")
            )
            print(cardinal_label)
        except (ValueError, TypeError, KeyError):
            continue  # Skip bad rows

        # Build city object
        cardinal_cities.append(f'  {{ lat: {lat}, lng: {lng}, name: "{city_name}" }}')

        # Build travel arc with distance and label
        cardinal_travels.append(
            f'  {{ startLat: {lat}, startLng: {lng}, endLat: {VATICAN_LAT}, endLng: {VATICAN_LNG}, '
            f'distance: {distance}, label: "{cardinal_label}" }}'
        )

    # Write cardinalCities
    jsfile.write("const cardinalCities = [\n")
    jsfile.write(",\n".join(cardinal_cities))
    jsfile.write("\n];\n\n")

    # Write cardinalTravels
    jsfile.write("const cardinalTravels = [\n")
    jsfile.write(",\n".join(cardinal_travels))
    jsfile.write("\n];\n")
