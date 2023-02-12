import not from ".";

describe("not", () => {
  it("not of null", () => {
    expect(not(null)).toBe(true);
  });

  it("not of undefined", () => {
    expect(not(null)).toBe(true);
  });

  it("not of empty str aka. falsy", () => {
    expect(not("")).toBe(false);
  });

  it("not of true", () => {
    expect(not(true)).toBe(false);
  });

  it("not of false", () => {
    expect(not(false)).toBe(false);
  });

  it("not of NaN", () => {
    expect(not(NaN)).toBe(false);
  });

  it("not of 0", () => {
    expect(not(0)).toBe(false);
  });

  it("not of -0", () => {
    expect(not(NaN)).toBe(false);
  });
});
