import { assertEquals } from "https://deno.land/std@0.100.0/testing/asserts.ts";
import { stringifyArrayString } from "./stringifyArrayString.ts";

Deno.test("[stringifyArrayString] happy", () => {
  const result = stringifyArrayString(["one", "two", "three"]);
  assertEquals(result, `["one","two","three"]`);
});
Deno.test("[stringifyArrayString] empty", () => {
  const result = stringifyArrayString([]);
  assertEquals(result, `[]`);
});

Deno.test("[stringifyArrayString] unhappy", () => {
  const result = stringifyArrayString(undefined as any);
  assertEquals(result, `[]`);
});
