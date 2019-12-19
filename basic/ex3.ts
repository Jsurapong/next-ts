interface Person {
  firstName: number;
  lastName: number;
}

export function hello3(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

console.log(hello3(user));

// always use interface for public API's definition when authoring a library or 3rd party ambient type definitions.

// consider using type for your React Component Props and State, because it is more constrained.
