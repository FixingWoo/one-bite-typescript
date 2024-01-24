/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 타입의 매개변수를 받고, 어떤 타입의 결과값을 반환하는지 설명
// 반환 값을 기준으로 타입을 알아서 추론
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 * 기본 값을 기준으로 타입 추론
 * 필수 매개변수는 선택적 매개변수보다 앞에 위치해야함
 */
function introduce(name = "", tall?: number, age: number) {
  console.log(name);

  // 타입 가드
  if (typeof tall === "number") {
    console.log(tall + 10);
  }
}

introduce("123", 123);
introduce("123");

function getSum(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((item) => (sum += item));

  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5, 6);
