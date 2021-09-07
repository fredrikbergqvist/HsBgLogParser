import { assertEquals } from "https://deno.land/std@0.100.0/testing/asserts.ts";
import { getPrettyDate } from "./getPrettyDate.ts";


Deno.test("[getPrettyDate] all two digit", () => {
  const testDate = new Date(2021, 11, 10, 12, 12, 12);
  const result = getPrettyDate(testDate);
  assertEquals(result, "2021-12-10T121212");
});
Deno.test("[getPrettyDate] all one digit", () => {
  const testDate = new Date(2021, 0, 1, 1, 1, 1);
  const result = getPrettyDate(testDate);
  assertEquals(result, "2021-01-01T010101");
});
