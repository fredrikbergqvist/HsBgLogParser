import { assertEquals } from "https://deno.land/std@0.100.0/testing/asserts.ts";
import { stringifyBool } from "./stringifyBool.ts";

Deno.test("[stringifyBool] happy true", () => {
  const result = stringifyBool("key", true);
  assertEquals(result, `key: true`);
});
Deno.test("[stringifyBool] happy false", () => {
  const result = stringifyBool("key", false);
  assertEquals(result, `key: false`);
});

Deno.test("[stringifyBool] unhappy value", () => {
  const result = stringifyBool("key", undefined as any);
  assertEquals(result, `key: false`);
});

Deno.test("[stringifyBool] unhappy key", () => {
  const result = stringifyBool(undefined as any, true);
  assertEquals(result, ``);
});
