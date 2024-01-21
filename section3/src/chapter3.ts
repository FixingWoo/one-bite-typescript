/**
 * 객체 타입간의 호환성
 * -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 되는가
 */
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "Yellow",
};

let dog: Dog = {
  name: "봄",
  color: "White",
  breed: "Maltese",
};

// 업 캐스팅
animal = dog;

// 다운 캐스팅
dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "ex",
  price: 10000,
  skill: "ex",
};

book = programmingBook;

/**
 * 초과 프로퍼티 검사
 * 객체 리터럴을 사용하면 발동
 */
let book2: Book = {
  name: "ex",
  price: 10000,
  skill: "ex",
};
