import csv
from collections import defaultdict

# Define the function to read the CSV and transform it to a JavaScript file with multiple constants for each year
def transform_csv_to_js(input_csv, output_js):
    rows = []
    
    # Read the CSV file
    with open(input_csv, 'r') as csvfile:
        csvreader = csv.DictReader(csvfile)
        rows = [row for row in csvreader]
    
    # Group data by year
    data_by_year = defaultdict(list)
    for row in rows:
        data_by_year[row['Year']].append(row)

    # Write the transformed data to a JavaScript file
    with open(output_js, 'w') as outfile:
        # Create a list to store the cities for the labelsDefaultCities line
        labels_cities = []
        
        # Create a dictionary to store arcs for each year
        arcs_by_year = {}

        # Iterate through each year and create a constant for each year
        for year, year_rows in data_by_year.items():
            # Write the beginning of the JavaScript array for arcs
            outfile.write(f"const arcs{year} = [\n")
            
            # Initialize a set to collect unique cities for the cities array
            cities_set = set()

            # Iterate through the rows for this year and create the arcs
            for i in range(len(year_rows)):
                # Get the current row and the next row
                start = year_rows[i]
                if i + 1 < len(year_rows):
                    end = year_rows[i + 1]
                else:
                    # If it's the last row, wrap around to the first row (for cycle)
                    end = year_rows[0]
                
                # Write the formatted JavaScript object for each arc
                outfile.write("  {\n")
                outfile.write(f"    startLat: {start['Latitude']}, // {start['Location']}, {start['Country']}\n")
                outfile.write(f"    startLng: {start['Longitude']},\n")
                outfile.write(f"    endLat: {end['Latitude']},  // {end['Location']}, {end['Country']}\n")
                outfile.write(f"    endLng: {end['Longitude']}\n")
                outfile.write("  },\n")
                
                # Add the cities to the cities set
                cities_set.add((start['Latitude'], start['Longitude'], start['Location']))
                cities_set.add((end['Latitude'], end['Longitude'], end['Location']))

            outfile.write("];\n\n")  # Close arcs array for this year
            # Write the cities array for this year
            outfile.write(f"const cities{year} = [\n")
            for city in cities_set:
                lat, lng, name = city
                outfile.write(f"  {{ lat: {lat}, lng: {lng}, name: \"{name}\" }},\n")
                # Add the cities for this year to the labels_cities list
            outfile.write("];\n\n")  # Close cities array for this year

            # Add this year's city array name to the labels_cities list (avoid duplicates)
            labels_cities.append(f"cities{year}")

            # Store arcs for later use in the datasets object
            arcs_by_year[year] = f"arcs{year}"

        # Write the final labelsDefaultCities line that combines all city arrays
        outfile.write("export const labelsDefaultCities = [...")
        outfile.write(", ...".join(labels_cities))  # Use spread operator to combine all cities arrays
        outfile.write("];\n\n")

        outfile.write("export const allArcs = [];\n\n")

        # Now write the datasets object
        outfile.write("export const datasets = {\n")
        outfile.write('  "All Cities": {\n')
        outfile.write('    labels: labelsDefaultCities\n')
        outfile.write('  },\n')

        # Write each year with its arcs and labels
        for year in data_by_year:
            outfile.write(f'  "{year} Trips": {{\n')
            outfile.write(f'    arcs: {arcs_by_year[year]},\n')
            outfile.write(f'    labels: cities{year}\n')
            outfile.write('  },\n')

        # Close the datasets object
        outfile.write("};\n")

    print("✅ JavaScript file has been created.")

# Input and output file names
input_csv = 'biden_travels_with_coords.csv'  # Replace with your CSV file path
output_js = 'define_biden_travels.js'  # Output JavaScript file

# Call the function
transform_csv_to_js(input_csv, output_js)

print("Done")