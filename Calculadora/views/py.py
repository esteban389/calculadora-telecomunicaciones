
import os

# Get the current directory
current_directory = os.getcwd()

# List all directories in the current directory
directories = [d for d in os.listdir(current_directory) if os.path.isdir(d)]

for directory in directories:
    # Check if the directory is empty
    if not os.listdir(directory):
        os.chdir(directory)
        # Create HTML and JS filenames based on the directory name
        html_filename = f"{directory}.html"
        js_filename = f"{directory}.js"

        # Create the HTML file
        with open(html_filename, 'w') as html_file:
            # You can customize the HTML content here
            html_content = f" "
            html_file.write(html_content)

        # Create the JS file
        with open(js_filename, 'w') as js_file:
            # You can customize the JS content here
            js_content = f"console.log('Hello from {directory}');"
            js_file.write(js_content)
        os.chdir(current_directory)
