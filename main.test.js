const {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} = require("./main.js");

describe("Test operations", () => {
    test("checks to see if all the characters are capitalized", () => {
        expect(capitalize("cheese")).toBe("CHEESE");
    });

    test("checks to see if the function reverses a string", () => {
        expect(reverseString("cheese")).toBe("eseehc");
    });

    test("checks to see if the function adds", () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    test("checks to see if the function subtracts", () => {
        expect(calculator.subtract(1, 2)).toBe(-1);
    });

    test("checks to see if the function multiplies", () => {
        expect(calculator.multiply(1, 2)).toBe(2);
    });

    test("checks to see if the function divides", () => {
        expect(calculator.divide(1, 2)).toBe(0.5);
    });

    test("caesar cipher check", () => {
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    });

    test("analyzed array check", () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        });
    });
});
