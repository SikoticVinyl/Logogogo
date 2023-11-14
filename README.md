# Logogogo

Logogogo is a Node.js command-line application that generates SVG images of various shapes with customized text and colors.

## Description
Logogogo provides an intuitive way to create simple logos using SVG shapes like circles, triangles, and squares. Users can customize the text content, font colors, as well as the shape and its color for logo generation.

This project was a great oppertunity to get in and do some object oriented programming and getting to learn and use classes and inheritance properly. It had some good refreshing touch ups on using node.js with inquirer to capture user input and generate the svg file. 

I also learned a lot about SVG files, what they are and how they work and are generated. Honestly the hardest part for me was trying to get my jest test created before the rest of the project - so much so that I eventually for time and less stress built the application out and the tests at the end. Having written the tests now I feel I have a better understanding to be able to try tests first on my next project.


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)

## Repository
Find the project repository here: <https://github.com/SikoticVinyl/Logogogo>

## Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/SikoticVinyl/Logogogo.git>
   cd logogogo
   npm install
   ```

## Usage

To generate an SVG image:

1. Run the application:
  ```bash
   node index.js
   ```

2. Follow the prompts:
 - Enter text (up to three characters), specify text color (e.g., blue or #3498db).
 - Select a shape (circle, triangle, or square).
 - Choose the shape color (e.g., green or #2ecc71).

3. An SVG file will be generated in the examples folder with the specified parameters. Its name should match the text you entered.

Here is a video walk through on how to use this application: <>

## Tests
Logogogo uses Jest for testing. To run the tests:

```bash
npm test
```

## Contributing
Contributions are welcome! If you have any ideas, enhancements, or bug fixes, feel free to fork the repository and submit a pull request.

## Questions
You can reach out to me at DanaRFulmer@yahoo.com or visit my [GitHub profile](https://github.com/SikoticVinyl). Additionally, please open an issue on GitHub for any questions, suggestions, or bug reports.