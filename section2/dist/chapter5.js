/**
 * enum (열거형) 타입
 * 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
 * 값을 지정하면 인덱스 자동 할당
 */
// 숫자형 enum
var Role;
(function (Role) {
  Role[(Role["ADMIN"] = 0)] = "ADMIN";
  Role[(Role["USER"] = 1)] = "USER";
  Role[(Role["GUEST"] = 2)] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
  Language["korean"] = "kr";
  Language["english"] = "en";
})(Language || (Language = {}));
var user1 = {
  name: "a",
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.korean,
};
var user2 = {
  name: "b",
  role: Role.USER, // 1 <- 일반 유저
  language: Language.korean,
};
var user3 = {
  name: "c",
  role: Role.GUEST, // 2 <- 게스트
  language: Language.english,
};
console.log(user1, user2, user3);
export {};
