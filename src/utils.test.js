import { TestScheduler } from "jest";
import { getCapitalized } from "./utils";
import { getIdFromUrl } from "./utils";
import { getAnimatedImageFromId } from "./utils";


//=> and function mean the same thing.

describe("getCapitalized", () => {
  test("should capitalize single word", () => {
    let input = "hello";
    let output = getCapitalized(input);
    expect(output).toBe("Hello");
  });

  test("should only capitalize the first word", function () {
    let input = "hello world";
    let output = getCapitalized(input);
    expect(output).toBe("Hello world");
  });
});

describe("getIdFromUrl", () => {
  test("should get id from URL (Pikachu)", () => {
    let input = "https://pokeapi.co/api/v2/pokemon/25";
    let output = getIdFromUrl(input);
    expect(output).toBe("25");
  });

  test("should get id from URL (Mew)", () => {
    let input = "https://pokeapi.co/api/v2/pokemon/133";
    let output = getIdFromUrl(input);
    expect(output).toBe("133");
  });
});

describe("getAnimatedImageFromId", () => {
  test("should get an animated image (Mew)", () => {
    let input = "151";
    let output = getAnimatedImageFromId(input);
    expect(output).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/151.gif");
  });
  test("should get an animated image (Bulbasaur)", () => {
    let input = "1";
    let output = getAnimatedImageFromId(input);
    expect(output).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif");
  });
});