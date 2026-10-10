# TypeScript Interface Notes

## Three ways to write `size = "large"` without redeclaring the type

### 1. Annotate the type

```ts
size: "small" | "large" | "medium" = "large";
```

### 2. Use `readonly`

Because the value cannot change, TypeScript keeps the literal type `"large"`.

```ts
readonly size = "large";
```

### 3. Use `as const`

```ts
size = "large" as const;
```

## `implements`, interfaces, and types

### 1. What `implements` does

`implements` is only a check. It copies nothing into the class.

The class must still declare its own properties because the class creates them in the JavaScript that runs. Interfaces and types are erased at compile time; they exist only for checking.

It checks that:

- The required name exists in the class.
- The property's declared type fits the interface.
- Extra properties in the class are allowed.

```ts
interface Cup {
	ml: number;
}

class A implements Cup {
	tl = 250; // Error: 'ml' is missing
}
```

### 2. Why `size = "large"` fails

For a mutable property, TypeScript widens `"large"` to `string`. Then `implements` compares `string` with `"large" | "small"` and fails because `string` is too wide.

`implements` does not feed its types into class members; it checks them afterward. Both `"large"` and `"xyz"` fail for the same reason because the property type is `string` either way.

With `string` or `number` in the interface, no repetition is needed because the inferred type already matches.

### 3. How to avoid retyping the union

```ts
size: CupSize["size"] = "large"; // Links to the interface
readonly size = "large";           // Keeps the literal type

type Size = "large" | "small";
size: Size = "large";
```

### 4. The “hint” rule

TypeScript keeps a literal type when it has an expected type written at that location, or when the value cannot change.

```ts
const a: CupSize = { size: "large" };          // `: CupSize` is the hint
const b = { size: "large" } satisfies CupSize; // Checks and keeps the literal
const c = { size: "large" };                   // `size` becomes string
```

`implements CupSize` does not count as a hint for a class's properties.

### 5. `extends` vs. `implements`

| Keyword | Meaning | Copies members? |
| --- | --- | --- |
| `extends` (class parent) | Inherits from a parent class | Yes |
| `implements` (interface or type) | Promises to match a shape | No |

### 6. Why interfaces exist

- Describing plain objects, function parameters, and React props. Nothing is written twice; this is about 90% of real use.
- Describing many classes that share one shape.
- Allowing functions to accept anything with a particular shape.
- Reporting an error on the class you edited instead of far away where the class is used.

With one class and nothing else using it, skip the interface and write the class with its own annotation.

### 7. `type` vs. `interface`

For object shapes, they are almost the same, and a class can implement either.

- `interface` supports declaration merging and uses `extends`.
- `type` can also represent unions, tuples, and primitives.

Pick one and stay consistent.

### 8. TypeScript vs. Java

Java also requires you to write everything again in the class, and more strictly. Java requires `implements` for a class to be accepted where an interface is expected.

TypeScript uses structural typing: the right shape is enough, even without `implements`. Therefore, `implements` is less necessary in TypeScript; it is an optional early-error safety net.

```ts
class Chai {
	size: "large" | "small" = "large";
}

class Coffee {
	size: "large" | "small" = "small";
}

function serve(cup: Chai) {}

serve(new Coffee()); // Works in TypeScript: same shape
```

## One-line summary

> `implements` means “check my finished class against this shape.” It gives no type hints and creates nothing, so the class has to declare the property and its type itself.