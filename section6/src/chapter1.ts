/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "",
  age: 1,
  position: "",
  work() {},
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, postion: string) {
    this.name = name;
    this.age = age;
    this.position = postion;
  }

  // 메서드
  work() {}
}

const employeeB = new Employee("123", 123, "321");
console.log(employeeB);

// 구조적 타입 시스템이기 때문에 가능
const employeeC: Employee = {
  name: "",
  age: 1,
  position: "",
  work() {},
};

class officer extends Employee {
  // 필드
  number: number;

  // 생성자
  constructor(name: string, age: number, postion: string, number: number) {
    super(name, age, postion);
    this.number = number;
  }
}
