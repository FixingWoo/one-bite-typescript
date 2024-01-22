/**
 * 타입 추론 === 타입 넓히기
 */
let a: number = 10;

// any 진화 (암묵적 any)
let b;
b = 10;
b.toFixed();
b = "a";
b.toUpperCase();

// 상수이기 때문에 리터럴 타입으로 추론
const num = 10;
