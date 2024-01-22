/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  // 타입 가드
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // 왼쪽에 있는 값이 오른쪽의 인스턴스인지
    console.log(value.getDate());
  } else if (value && "age" in value) {
    console.log(console.log(value));
  }
}
