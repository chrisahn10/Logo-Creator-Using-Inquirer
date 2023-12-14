class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="160" cy="110" r="90" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="160, 20 250, 180 60, 180" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="100" y="45" width="125" height="125" fill="${this.color}" />`
    }
}

module.exports = { Circle, Triangle, Square };