/**
 * 맵드 타입
 * 객체 타입을 조작
 * 타입 별칭으로만 사용 가능
 */

interface User {
  id: number;
  name: string;
  age: number;
}

/**
 * 프로퍼티 key 정의 / 프로퍼티의 value type
 * 이 객체 타입에는 유니온에 정의된 키일 수 있다.
 * 모두 선택적 프로퍼티로 지정할 수 있음 (?)
 */

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

function fetchUser(): User {
  // ...기능
  return {
    id: 1,
    name: "",
    age: 1,
  };
}

function upateUser(user: User) {
  // ... 기능
}

upateUser({
  id: 1,
  name: "",
  age: 1,
});
