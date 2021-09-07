import { assertEquals } from "https://deno.land/std@0.100.0/testing/asserts.ts";
import { stringifyNumber } from "./stringifyNumber.ts";

Deno.test("[stringifyNumber] happy", () => {
  const result = stringifyNumber("key", 1);
  assertEquals(result, `key: 1`);
});

Deno.test("[stringifyNumber] unhappy value", () => {
  const result = stringifyNumber("key", undefined as any);
  assertEquals(result, `key: -1`);
});

Deno.test("[stringifyNumber] unhappy key", () => {
  const result = stringifyNumber(undefined as any, 1);
  assertEquals(result, ``);
});
