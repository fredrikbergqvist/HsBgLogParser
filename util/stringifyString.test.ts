import { assertEquals } from "https://deno.land/std@0.100.0/testing/asserts.ts";
import { stringifyString } from "./stringifyString.ts";

Deno.test("[stringifyString] happy", () => {
  const result = stringifyString("key", "value");
  assertEquals(result, `key: "value"`);
});

Deno.test("[stringifyString] unhappy key", () => {
  const result = stringifyString(undefined as any, "");
  assertEquals(result, "");
});

Deno.test("[stringifyString] empty value", () => {
  const result = stringifyString("key", "");
  assertEquals(result, `key: ""`);
});

Deno.test("[stringifyString] unhappy value", () => {
  const result = stringifyString("key", undefined as any);
  assertEquals(result, `key: ""`);
});
