/**
 * void - 공허 - 아무것도 없음을 의미하는 타입
 * null or undefined로 설정하면 꼭 해당 값을 반환해야함
 */

function func1(): string {
  return "a";
}

function func2(): void {
  console.log(1);
}

/**
 * never -> 존재하지 않는 -> 불가능한 타입
 * never 타입은 다른 타입에 활용할 수 없다
 */
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let a: never;
