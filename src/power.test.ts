import { describe, expect, test } from "vitest";

import power from "./power";

describe("power", () => {
  test("should return 1 for a exponent of 0", () => {
    expect(power(50, 0)).toBe(1);
  });

  test("should return correct value for negative exponents", () => {
    expect(power(10, -1)).toBe(0.1);
  });

  test("should return correct value for positive exponents", () => {
    expect(power(7, 2)).toBe(49);
  });
});
