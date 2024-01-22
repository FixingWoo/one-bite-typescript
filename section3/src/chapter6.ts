/**
 * 타입 단언 (assertion)
 * 실제로 값을 변경하지 않음
 */

type Person = {
  name: string;
  age: number;
};

// 초기화 값을 별칭 타입으로 간주하라
let person = {} as Person;

type Dog = {
  name: string;
  color: string;
};

// 객체 리터럴로 선언했을때 초과 프로퍼티 검사
let dog = {
  name: "Spring",
  color: "White",
  breed: "Maltese",
} as Dog;

/**
 * 타입 단언 규칙
 * 값 as 단언 -> 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

// never는 모든 타입의 서브 타입, 업 캐스팅
let num1 = 10 as never;
let num2 = 10 as unknown;

// 다중 단언
let num3 = 10 as unknown as string;

/**
 * const 단언
 */
let num4 = 10 as const;

// read only, 프로퍼티 수정 불가
let cat = {
  name: "",
  color: "",
} as const;

/**
 * Non Null 단언
 * null이나 undefined가 아니라는 것을 타입스크립트 컴파일러에게 알려주는 역할
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "",
  author: "",
};

// 옵셔널 체이닝 자동 추가되어 undefined가 반환될 수 있기 때문에 오류 발생
// ! - Non Null 단언 연산자
const len: number = post.author!.length;
