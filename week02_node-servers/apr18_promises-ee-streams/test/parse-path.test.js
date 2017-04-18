const url = require("url");
const assert = require("assert");

function parsePath(path) {
  const parsed = url.parse(path, true);
  const parts = parsed.pathname.slice(1).split("/");
  console.log("what are you doing route", parts);
  return {
      route: parts[0],
      query: parsed.query, 
      name: parts[1],
  };
}

describe("parse path", () => {
  it("simple route", () => {
    const parsed = parsePath("/greeting");
    assert.deepEqual(parsed, {
      route: "greeting",
      query: {},
      name: void 0,
    });
  });
    
  it('check name', () => {
      const parsed = parsePath('/greeting/martin');
      assert.deepEqual(parsed, {
          route: 'greeting',
          query: {},
          name: 'martin'
      });
  });
});
