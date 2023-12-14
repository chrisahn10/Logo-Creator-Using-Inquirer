const { Square, Triangle, Circle } = require("./shapes");

describe("Square", () => {
    test("Expecting a red rectangle to render", () => {
        const expectedSvg = `<rect x="100" y="45" width="125" height="125" fill="red" />`
        const square = new Square();
        square.setColor("red");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("expecting a setColor parameter.", () => {
        const expectedSvg = `<rect x="100" y="45" width="125" height="125" fill="green" />`
        const square = new Square();
        square.setColor("green");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    
})
describe("Circle", () => {
    test("Should render svg for an yellow circle element", () => {
        const expectedSvg = `<circle cx="160" cy="110" r="90" fill="yellow" />`
        const square = new Circle();
        square.setColor("yellow");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("expecting a setColor parameter.", () => {
        const expectedSvg = `<circle cx="160" cy="110" r="90" fill="green" />`
        const square = new Circle();
        square.setColor("green");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });

describe("Triangle", () => {
    test("Expecting a purple traingle to render", () => {
        const expectedSvg = `<polygon points="160, 20 250, 180 60, 180" fill="purple" />`
        const square = new Triangle();
        square.setColor("purple");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("expecting a setColor parameter.", () => {
        const expectedSvg = `<polygon points="160, 20 250, 180 60, 180" fill="blue" />`
        const square = new Triangle();
        square.setColor("blue");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });

})


})