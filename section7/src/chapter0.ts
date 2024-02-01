/**
 * 제너릭 (일반적인, 포괄적인)
 * <T> -> 타입변수
 * 함수를 호출할때 인수에 따라 타입이 결정됨
 */
function func<T>(value: T): T {
  return value;
}

let arr = func<[number, number, number]>([1, 2, 3]);
