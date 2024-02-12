interface Post {
  title: string;
  tags: string[];
  content: string;
  url: string;
}

/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 변경하는 타입
 */
type Partial<T> = {
  [key in keyof T]?: T[key];
};

const partialPost: Partial<Post> = {
  title: "",
  tags: [],
  content: "",
};

/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 변경하는 타입
 */
type Required<T> = {
  [key in keyof T]-?: T[key];
};

const requiredPost: Required<Post> = {
  title: "",
  tags: [],
  content: "",
  url: "",
};

/**
 * Readonly<T>
 * -> 읽기 전용
 */
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "",
  tags: [],
  content: "",
  url: "",
};

readonlyPost.title = "test";
