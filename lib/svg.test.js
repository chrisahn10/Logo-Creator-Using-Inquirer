const SVG = require('./svg');

describe('SVG', () => {
  let svg;

  beforeEach(() => {
    svg = new SVG();
  });

  describe('render', () => {
    it('should render an empty SVG when no shape or text is set', () => {
      const expected = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
      expect(svg.render()).toEqual(expected);
    });

    it('should render SVG with only a shape element when no text is set', () => {
      svg.setShape({ render: () => '<rect x="10" y="10" width="50" height="50" />' });
      const expected = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="50" height="50" /></svg>';
      expect(svg.render()).toEqual(expected);
    });

    it('should render SVG with only a text element when no shape is set', () => {
      svg.setText('Hi', 'green');
      const expected = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">Hi</text></svg>';
      expect(svg.render()).toEqual(expected);
    });
  });

  describe('setText', () => {
    it('should allow setting a single character text', () => {
      svg.setText('A', 'purple');
      const expected = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">A</text>';
      expect(svg.textElement).toEqual(expected);
    });
  });

  describe('setShape', () => {
    it('sets a different shape', () => {
      const shape = { render: () => '<ellipse cx="75" cy="75" rx="50" ry="25" />' };
      svg.setShape(shape);
      expect(svg.shapeElement).toEqual('<ellipse cx="75" cy="75" rx="50" ry="25" />');
    });
  });
});
