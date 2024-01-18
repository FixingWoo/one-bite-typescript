// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "good"];

let boolArr: Array<boolean> = [true, false];

// 배열 요소 타입이 다양한 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열 타입 정의
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", false];

const users: [number, string][] = [
  [1, "a"],
  [2, "b"],
  [3, "c"],
];
