const { expect } = require("chai");

const testObj = {
  key: "success",
};

describe("Example Test", () => {
  it("Check Object value", () => {
    //equal
    expect(testObj.key).to.equal("success");
  });
});
