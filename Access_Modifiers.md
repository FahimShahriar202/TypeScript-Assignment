# Access Modifiers in TypeScript

## Introduction

Access Modifiers in TypeScript are used to control the accessibility of class properties and methods.

## Types of Access Modifiers

There are four commonly used modifiers:

1. Public: Can be accessed from anywhere, both inside and outside the class. By default, all class properties and methods are public.

2. Private: We cannot directly access or modify these properties from outside the class. They can only be accessed inside the class where they are declared.

3. Protected: It is similar to private, but when a child class inherits a parent class, it can also access the protected properties and methods of the parent class.

4. Readonly: This modifier allows a property to be read but not reassigned after initialization. It can be assigned during declaration or inside the constructor.

## Code Example

```typescript
class Employee {
    public readonly name: string;
    private _baseSalary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this._baseSalary = salary;
    }

    get baseSalary(): number {
        return this._baseSalary;
    }

    set baseSalary(newSalary: number) {
        this._baseSalary = newSalary;
    }
}

class Manager extends Employee {
    constructor(
        name: string,
        salary: number,
        public teamMemberCount: number
    ) {
        super(name, salary);
    }
}

const emp1 = new Employee("Brock Lesner", 5000000);
const manager1 = new Manager("Paul Heyman", 2400000, 2);
```

In this example:
- `name` is public but readonly, so it cannot be reassigned.
- `_baseSalary` is private and cannot be directly accessed outside the Employee class.
- `baseSalary` uses a getter and setter to access and modify the private salary.
- `teamMemberCount` is automatically declared as a public property through the constructor.

## Conclusion

Access Modifiers help us maintain proper access control in TypeScript OOP. We can use public for general accessibility, private for restricting access within a class, protected for inheritance and readonly when we don't want a property to be reassigned.