const stringReverse = string =>
  string
    .split("")
    .reverse()
    .join("");
//const actual = !stringReverse;
// const expected = stringReverse;

test("Check to see if string is reversed", () => {
  const actual = stringReverse("hello");
  const expected = "olleh";
  expect(actual).toBe(expected);
});

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  };
}

function test(title, callBack) {
  try {
    callBack();
    console.log(
      `%c ✓ ${title}`,
      "color: white;background-color: green; font-size:40px;"
    );
  } catch (error) {
    console.log(
      `%c ${title}`,
      "color: white;background-color: red; font-size:40px;"
    );
  }
}
