const listprocessing = require("./listprocessing");

test("Returns a list by excluding elements which are multiples of 2 or 3 and checks if the list length is multiple of 10", () => {
  const inputList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const expectedOutput = [1, 5, 7, 11, 13, 17, 19];
  expect(listprocessing(inputList)).toEqual(expectedOutput);
});

test("Throws an error for an invalid input list length", () => {
  const inputList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  expect(() => listprocessing(inputList)).toThrowError(
    /The list length must be a multiple of 10/
  );
});
