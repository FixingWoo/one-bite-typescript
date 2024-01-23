/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로 구성된 유니온 타입
 */

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 방문하였습니다.

function login(user: User) {
  // if ("kickCount" in user) {
  //   // admin
  //   console.log(`${user.name} ${user.kickCount}`);
  // } else if ("point" in user) {
  //   // member
  //   console.log(`${user.name} ${user.point}`);
  // } else {
  //   // guest
  //   console.log(`${user.name} ${user.visitCount}`);
  // }

  switch (user.tag) {
    case "ADMIN":
      console.log(`${user.name} ${user.kickCount}`);
      break;

    case "MEMBER":
      console.log(`${user.name} ${user.point}`);
      break;

    default:
      console.log(`${user.name} ${user.visitCount}`);
      break;
  }
}

// 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING":
      console.log("로딩 중");
      break;

    case "FAILED":
      console.log(`에러 발생 :${task.error.message}`);
      break;

    case "SUCCESS":
      console.log(`성공 :${task.response.data}`);
      break;

    default:
      break;
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "",
  },
};
