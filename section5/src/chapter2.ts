/**
 * 선언 합치기
 * 중복 선언하면 모든 선언이 합쳐짐
 */
interface Person {
  name: string;
}

interface Person {
  age: number;
}

interface Develper extends Person {
  name: "1";
}

const person: Person = {
  name: "",
  age: 2,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  a: number;
  b: number;
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "123",
};
