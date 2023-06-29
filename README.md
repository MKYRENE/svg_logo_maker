
# SVG Logo Generator
Logo Generator: Command-line application for generating simple logos based on user input, eliminating the need for a graphic designer.

The SVG Logo Generator is a command-line application that allows freelance web developers to generate simple logos for their projects without relying on a graphic designer. It provides an interactive interface to input text, select colors, and choose from various shapes to create a customized SVG logo.


## Screenshots
![Screenshot 1](./Assets/Screenshot%202023-06-28%20at%2011.23.47%20PM.png)
![Screenshot 2](./Assets/Screenshot%202023-06-28%20at%2011.20.48%20PM.png)

## Features

- Generate a simple logo with up to three characters.
- Choose the text color using color keywords or hexadecimal values.
- Select from different shapes: circle, triangle, and square.
- Define the shape color using color keywords or hexadecimal values.
- Output the generated logo as an SVG file named `logo.svg`.
- Open the `logo.svg` file in a browser to view the resulting logo image.

## Installation

1. Clone the repository to your local machine.
   ```shell
   git clone <repository-url>
   ```

2. Navigate to the project directory.
   ```shell
   cd svg_logo_maker
   ```

3. Install the required dependencies.
   ```shell
   npm install
   ```

## Usage

1. Open a terminal and navigate to the project directory.

2. Run the following command to start the application.
   ```shell
   node index
   ```

3. Follow the prompts to enter the text, text color, shape, and shape color for the logo.

4. Once you have provided all the input, the application will generate the SVG logo file `logo.svg` in the `svg` directory.

5. The application will also automatically open the `logo.svg` file in your default browser for you to view the logo image.

## Customization

You can customize the logo generation process by modifying the code in the `index.js` file and the `lib/shapes.js` file. The `index.js` file contains the user prompts and the logic to generate the logo, while the `lib/shapes.js` file defines the shapes (circle, triangle, square) and their rendering properties.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to modify and adapt the code according to your needs.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Credits

This project was created by Michael Rodriguez.

