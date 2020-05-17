import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { factorial } from "./factorial.ts";

Deno.test('when running factorial of a positive number', function(): void {
  assertEquals(factorial(5), 120);
});