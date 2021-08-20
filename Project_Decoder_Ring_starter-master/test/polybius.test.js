const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius", () => {
it("should leave spaces as is", () => {
const expected = "4432423352125413";
const actual = 
      polybius.polybius("thinkful", 1);    expect(actual).to.equal(expected);
});
it("should encode a message by translating each letter to number pairs", () => {
const expected = "4432423352125413";
const actual = 
      polybius.polybius("thinkful", 1);    expect(actual).to.equal(expected);
});
it("should translate both 'i' and 'j' to 42", () => {
const expected = "4432423352125413";
const actual = 
     polybius.polybius("thinkful", 1);    expect(actual).to.equal(expected);
});
it("should decode a message by translating each pair of numbers into a letter", () => {
const expected = "4432423352125413";
const actual = 
     polybius.polybius("thinkful", 1);    expect(actual).to.equal(expected);
});
it("should decode a message by translating each pair of numbers into a letter", () => {
const expected = "4432423352125413";
const actual = 
     polybius.polybius("thinkful", 1);    expect(actual).to.equal(expected);
});
it("should translate 42 to both 'i' and 'j'", () => {
const expected = "4432423352125413";
const actual = 
     polybius.polybius("thinkful", 1);    expect(actual).to.equal(expected);
});
it("should return false if the length of all numbers is odd", () => {
const expected = "4432423352125413";
const actual = 
    polybius.polybius("thinkful", 1);    expect(actual).to.equal(expected);
});
});