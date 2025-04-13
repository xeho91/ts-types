import { describe, it } from "jsr:@std/testing/bdd";
import { expectTypeOf } from "npm:expect-type";

import type { Display, ToString } from "./display.ts";

describe("Display", () => {
	it("improves the return type of instance method `toString()`", () => {
		expectTypeOf<Display<"🔥">>().toEqualTypeOf<{
			toString(): "🔥";
		}>();
		expectTypeOf<Display<"🔥">>().not.toEqualTypeOf<{
			toString(): string;
		}>();
	});
});

describe("ToString", () => {
	it("infers correctly the return type of method `toString`", () => {
		class Ice implements Display<"🧊"> {
			public toString() {
				return "🧊" as const;
			}
		}
		expectTypeOf<ToString<Ice>>().toEqualTypeOf<"🧊">();
		expectTypeOf(new Ice().toString()).toEqualTypeOf<"🧊">();
		expectTypeOf(new Ice().toString()).not.toEqualTypeOf<string>();
	});
});
