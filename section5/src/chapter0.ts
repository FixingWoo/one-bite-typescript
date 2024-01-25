/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "",
  age: 3,
  sayHi: () => {
    console.log("");
  },
};

person.name = "12";
person.sayHi();
