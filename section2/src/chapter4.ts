/**
 * 타입 별칭
 * 중복된 타입을 막기 위함
 */

type User = {
  id: number;
  item: string;
  nickname: string;
  age: number;
};

let user: User = {
  id: 1,
  item: "a",
  nickname: "b",
  age: 2,
};

let userA: User = {
  id: 2,
  item: "b",
  nickname: "c",
  age: 33,
};

/**
 * 인덱스 시그니처
 * 규칙을 기반으로 객체의 타입을 유연하게 정하는 문법
 */
type countryCodes = {
  [key: string]: string;
};

let countryCodes: countryCodes = {
  korea: "ko",
  japan: "jp",
};

type countryNumberCodes = {
  [key: string]: number;
  Korea: number; // 디폴트 프로퍼티 설정
};

let countryNumberCodes: countryNumberCodes = {
  Korea: 410,
  Japan: 411,
};
