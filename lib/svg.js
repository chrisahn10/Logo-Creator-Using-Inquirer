class SVG {
    constructor() {
        // Initialize SVG with empty text and shape elements. 
        // 'textElement' will hold the SVG text component, and 'shapeElement' will hold the SVG shape component.
        this.textElement = "";
        this.shapeElement = "";
    }

    render() {
        // Constructs and returns an SVG string. 
        // Combines the shape and text elements within the SVG tags to create the final SVG content.
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    }

    setText(message, color) {
        // Sets the SVG text element with specified message and color.
        // Throws an error if the message exceeds 3 characters to maintain design constraints.
        if (message.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
    }

    setShape(shape) {
        // Sets the SVG shape element.
        // Demonstrates polymorphism by allowing different shapes (like square, circle, triangle) to be rendered through their respective render methods.
        this.shapeElement = shape.render();
    }
}

module.exports = SVG;
