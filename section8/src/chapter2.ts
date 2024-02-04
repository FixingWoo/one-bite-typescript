/**
 * keyof 연산자
 */

// person의 타입을 추출
type Person2 = typeof person;

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person = {
  name: "",
  age: 1,
};

getPropertyKey(person, "age");
