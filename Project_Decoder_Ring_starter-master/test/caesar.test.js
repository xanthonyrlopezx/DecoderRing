// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar")

describe("caesar", () => {
it("should return false if shift is 0", () => {
const expected = false;
const actual = caesar.caesar("thinkful", 0);
expect(actual).to.equal(expected);
    });
it("should return false if shift is greater than 25", () => {
const expected = false;
const actual = caesar.caesar("thinkful", 26);
        expect(actual).to.equal(expected);
    });
it("should return false if shift is less than -25", () => {
const expected = false;
const actual = caesar.caesar("thinkful", -26);
        expect(actual).to.equal(expected);
    });  
it("should encode a message by shifting letters", () => {
const expected = "wklqnixo";
const actual = caesar.caesar("thinkful", 3);
        expect(actual).to.equal(expected);
    });
it("should ignore capital letters", () => {
const expected = "wklqnixo";
const actual = caesar.caesar("thinkful", 3);
        expect(actual).to.equal(expected);
    });
it("should handle letters at end of alphabet", () => {
const expected = "wklqnixo";
const actual = caesar.caesar("thinkful", 3);
        expect(actual).to.equal(expected);
    });
it("should handle negative shifts", () => {
const expected = "qefkhcri";
const actual = caesar.caesar("thinkful", -3);
        expect(actual).to.equal(expected);
    });
it("wraps shifts that go past the end of the alphabet", () => {
const expected = "hvwbytiz"
const actual = caesar.caesar("thinkful", 14);
        expect(actual).to.equal(expected);
    });
it("Should wrap around the alphabet when reaching z", () => {
const expected = "wklqnixo";
const actual = caesar.caesar("thinkful",3);
        expect(actual).to.equal(expected);
});
it('Should ignore uppercase letters', () => {
const expected = "wklqnixo";
const actual = caesar.caesar("thinkful",3);
        expect(actual).to.equal(expected);
});
it("Should maintain spaces in encoding if part of input", () => {
const expected = "wklqnixo";
const actual = caesar.caesar("thinkful", 3);
        expect(actual).to.equal(expected);
});
it("should leave spaces as is", () => {
const expected = "wklqnixo";
const actual = caesar.caesar("thinkful", 3);    expect(actual).to.equal(expected);
});
});






