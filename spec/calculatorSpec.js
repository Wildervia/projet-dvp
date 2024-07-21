const { calculate } = require('../calculatrice/script.js');

describe("Calculator", function() {
    it("should add two numbers correctly", function() {
        expect(calculate(2, 3, '+')).toBe(5);
    });

    it("should subtract two numbers correctly", function() {
        expect(calculate(5, 2, '-')).toBe(3);
    });

    it("should multiply two numbers correctly", function() {
        expect(calculate(3, 4, '*')).toBe(12);
    });

    it("should divide two numbers correctly", function() {
        expect(calculate(10, 2, '÷')).toBe(5);
    });

    it("should handle division by zero correctly", function() {
        expect(calculate(10, 0, '÷')).toBe(Infinity);
    });

    it("should return the second operand if no valid operation is provided", function() {
        expect(calculate(10, 2, '%')).toBe(2);
    });
});
