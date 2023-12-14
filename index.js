const inquirer = require("inquirer");
const SVG = require('./lib/svg');
const { Circle, Triangle, Square } = require("./lib/shapes");
const { writeFile } = require("fs/promises");

class CLI {
    run() {
        return inquirer
            // inquirer prompts for retrieiving user input for svg render output. 
            .prompt([
                {
                    name: "text",
                    type: "input",
                    message:
                        "Enter the text for your logo. (Only can contain up to three characters.)",
                    validate: (text) =>
                        text.length <= 3 || "The logo can only contain up to three characters."
                },
                {
                    name: "textColor",
                    type: "input",
                    message: "Enter a color for your logo's text:"
                },
                {
                    name: "shapeType",
                    type: "list",
                    message: "Choose which kind of shape you would like for your logo:",
                    choices: ["circle", "triangle", "square"]
                },
                {
                    name: "shapeColor",
                    type: "input",
                    message: "Enter a color for the shape/background of the logo:"
                },

            ])

            // using switch case instead of if/else in order to simplify logic. 
            .then(({ text, textColor, shapeType, shapeColor }) => {
                let shape;
                switch (shapeType) {
                    case "circle":
                        shape = new Circle();
                        break;

                    case "triangle":
                        shape = new Triangle();
                        break;

                    default:
                        shape = new Square();
                        break;
                }
                shape.setColor(shapeColor);

                const svg = new SVG();
                // setText and setShape functions from svg.js. Tested in svg.test.js. 
                svg.setText(text, textColor);
                svg.setShape(shape);
                return writeFile("logo.svg", svg.render());
            })
            // logs this message to the console to inform user that the svg logo was rendered. 
            .then(() => {
                console.log("Generated logo.svg");
            })
            .catch((error) => {
                console.log(error);
                console.log("Hmm... something's not quite right.")
            })

    }

}

new CLI().run();