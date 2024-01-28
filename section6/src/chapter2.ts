/**
 * 접근 제어자
 */
class Employee {
  // 필드
  // private name: string;
  // protected age: number; // 파생 클래스 메서드 내에서 접근 가능
  // public position: string;

  // 생성자
  // 접근제어자가 있다면 자동으로 필드 정의, 초기화됨
  constructor(
    private name: string,
    protected age: number,
    public postion: string
  ) {}

  // 메서드
  work() {
    console.log(`${this.name}`);
  }
}
