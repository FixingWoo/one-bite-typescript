/**
 * 제네릭 인터페이스
 * 타입 정의할때 타입 변수에 할당한 타입을 꺽쇠와 함께 사용해야함
 */
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let KeyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 인덱스 시그니처
 */

interface NumberMap {
  [key: string]: number;
}

let a: NumberMap = {
  key: 213,
};

interface Map<V> {
  [key: string]: V;
}

let b: Map<string> = {
  key: "123",
};

let c: Map<boolean> = {
  key: false,
};

/**
 * 제네릭 타입 별칭
 */
type Map2<V> = {
  [key: string]: V;
};

let d: Map2<string> = {
  key: "he",
};

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 구분 : 학생 / 개발자
 */
interface Student {
  type: "Student";
  school: string;
}

interface Developer {
  type: "Developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

// 제네릭 인터페이스는 변수의 타입을 정의함과 동시에 타입 변수에 할당할
// 타입을 명시해야함
function goToSchool(user: User<Student>) {
  const school = user.profile.school;
}

const j: User<Developer> = {
  name: "",
  profile: {
    type: "Developer",
    skill: "",
  },
};

const s: User<Student> = {
  name: "",
  profile: {
    type: "Student",
    school: "",
  },
};
