/**
 * Used for formatting types for user-facing output,
 * allowing you to customize how a type is printed.
 * Utilizes built-in {@link Object.prototype.toString()}.
 * @module
 */

/**
 * Enforce a custom instance to return a stringified _(strongly typed)_ representation.
 *
 * @example
 * ```ts
 * import type { Display } from "@xeho91/trait/display";
 *
 * export class Fire implements Display<"🔥"> {
 *    public toString() {
 *        return "🔥" as const;
 *    }
 * }
 *
 * const fire = new Fire().toString();
 * //.   ^ "🔥"
 * ```
 */
export interface Display<T extends string = string> {
	/**
	 * Return a stringified representation of this instance.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString#overriding_tostring_for_custom_objects}
	 */
	toString(): T;
}

/**
 * A type utility to extract the stringified value from instance
 * which has the {@link Display} trait _(`implements Display`)_.
 *
 * @example
 * ```ts
 * import type { Display, ToString } from "@xeho91/trait/display";
 *
 * class Ice implements Display<"🧊"> {
 *     public toString() {
 *         return "🧊" as const;
 *     }
 * }
 *
 * type Stringified = ToString<Ice>;
 * //.  ^ "🧊"
 * ```
 */
export type ToString<TDisplay extends Display> = TDisplay extends Display<
	infer T
>
	? T
	: never;
