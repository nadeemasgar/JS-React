import thumbWar from "../thumb-war";
import * as utils from "../utils";

test("returns winner", () => {
  jest.spyOn(utils, "getWinner");
  utils.getWinner.mockImplementation((p1, p2) => p2);

  const winner = thumbWar("Ken Wheeler", "Kent C. Dodds");
  expect(winner).toBe("Kent C. Dodds");
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  utils.getWinner.mock.calls.forEach((args) => {
    expect(args).toEqual(["Ken Wheeler", "Kent C. Dodds"]);
  });

  utils.getWinner.mockRestore();
});

/* ************************************ */

jest.mock("../utils", () => {
  const actualUtils = require.requireActual("../utils");
  return {
    ...actualUtils,
    getWinner: jest.fn((p1, p2) => p2),
  };
});

test("returns winner", () => {
  const winner = thumbWar("Ken Wheeler", "Kent C. Dodds");
  expect(winner).toBe("Kent C. Dodds");
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  utils.getWinner.mock.calls.forEach((args) => {
    expect(args).toEqual(["Ken Wheeler", "Kent C. Dodds"]);
  });
});

/* ********************************************* */

test("returns winner", () => {
  utils.getWinner.mockClear();
  const winner = thumbWar("Ken Wheeler", "Kent C. Dodds");
  expect(winner).toBe("Kent C. Dodds");
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  utils.getWinner.mock.calls.forEach((args) => {
    expect(args).toEqual(["Ken Wheeler", "Kent C. Dodds"]);
  });
});

test("returns winner again", () => {
  utils.getWinner.mockClear();
  const winner = thumbWar("Ken Wheeler", "Kent C. Dodds");
  expect(winner).toBe("Kent C. Dodds");
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  utils.getWinner.mock.calls.forEach((args) => {
    expect(args).toEqual(["Ken Wheeler", "Kent C. Dodds"]);
  });
});

/* ************************************************* */

beforeEach(() => {
  utils.getWinner.mockClear();
});

test("returns winner", () => {
  const winner = thumbWar("Ken Wheeler", "Kent C. Dodds");
  expect(winner).toBe("Kent C. Dodds");
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  utils.getWinner.mock.calls.forEach((args) => {
    expect(args).toEqual(["Ken Wheeler", "Kent C. Dodds"]);
  });
});

test("returns winner again", () => {
  const winner = thumbWar("Ken Wheeler", "Kent C. Dodds");
  expect(winner).toBe("Kent C. Dodds");
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  utils.getWinner.mock.calls.forEach((args) => {
    expect(args).toEqual(["Ken Wheeler", "Kent C. Dodds"]);
  });
}); 
