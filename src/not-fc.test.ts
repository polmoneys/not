import fc from "fast-check";
import not from ".";

describe("fc", () => {
  it("not strings ", () => {
    fc.assert(
      fc.property(fc.string(), input => {
        return not(input) === false;
      })
    ),
      { verbose: true };
  });

  it("not integers ", () => {
    fc.assert(
      fc.property(fc.integer(), input => {
        return not(input) === false;
      })
    ),
      { verbose: true };
  });

  it("not natural numbers ", () => {
    fc.assert(
      fc.property(fc.nat(), input => {
        return not(input) === false;
      })
    ),
      { verbose: true };
  });

  it("not falsy ", () => {
    fc.assert(
      fc.property(fc.falsy(), input => {
        if (input === undefined || input === null) return not(input) === true;
        return not(input) === false;
      })
    ),
      { verbose: true };
  });
});
