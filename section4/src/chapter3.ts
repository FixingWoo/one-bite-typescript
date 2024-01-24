/**
 * 함수 오버로딩
 * 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의
 *
 * -> 모든 매개변수의 타입 = number
 * -> 매개변수가 1개 -> 이 매개변수 * 20 출력
 * -> 매개변수가 3개 -> 3개 더한 값 출력
 */

// 선언부만 작성한 함수 = 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number): void;

// 실제 구현부 = 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func();
func(1);
func(1, 2);
func(1, 2, 3);
