// object
// 객체 리터럴 타입
let user: {
  id?: number; // 선택적 프로퍼티
  name: string;
} = {
  id: 1,
  name: "item",
};

user.id;

const config: {
  // readonly apiKey: string;
  apiKey: string;
} = {
  apiKey: "MY API KEY",
};

config.apiKey = "123";
