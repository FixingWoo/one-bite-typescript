/**
 * any
 * 특정 변수의 타입을 우리가 확실히 모를때
 */
let anyVar: any = 10;
anyVar = "hello";

/**
 * unknown
 * 다른 타입에 값을 할당할 수 없음
 */
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;

let num: number = 1;

// 타입 정제
if (typeof unknownVar === "number") {
  num = unknownVar;
}
