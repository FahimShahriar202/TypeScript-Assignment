# Type vs Interface in TypeScript

## Introduction

In TypeScript, both type aliases and interface are used to define the structure of data.

## Core Differences

1. Usage: Interface is generally connected to objects, whereas Type can be used with objects, primitive types, literals, unions, intersections, and tuples.

```typescript
interface Animal {
    species: string;
}

type UserID = number;
type Status = "active" | "inactive";
type Coordinates = [number, number];
```

2. Extension: Both Type and Interface support extending existing structures, but they use different approaches.

For Interface, we use the `extends` keyword.

```typescript
interface Animal {
    species: string;
}

interface PersCatto extends Animal {
    breed: "persian";
}
```

For Type, we can use intersection (`&`) to combine existing types.

```typescript
type Vehicle = {
    brand: string;
};

type Car = Vehicle & {
    model: string;
};

const myCar: Car = {
    brand: "Toyota",
    model: "Corolla"
};
```

3. Multiple Inheritance: An interface can extend multiple interfaces at the same time.

```typescript
interface Engine {
    horsepower: number;
}

interface Wheels {
    wheelCount: number;
}

interface Car extends Engine, Wheels {
    brand: string;
}
```

4. Declaration Merging: Type cannot be redeclared with the same name, but Interface can be redeclared. After redeclaration, TypeScript merges the interface declarations.

```typescript
interface User {
    name: string;
}

interface User {
    age: number;
}
```

Here, the final User interface contains both `name` and `age`.

## When Should We Use Them?

- Type: When dealing with primitive types, literals, unions, intersections and tuples.
- Interface: When defining object structures, especially when we need declaration merging or extension.

## Conclusion

Both Type and Interface are useful for defining data structures in TypeScript. We should choose between them based on our requirements. For ordinary object structures, both are perfectly valid.