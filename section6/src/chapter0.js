/**
 * 클래스
 */

let studentA = {
  name: "",
  age: 21,
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {}

  introduce() {}
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
let studentB = new Student("", "", "");
