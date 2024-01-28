/**
 * 인터페이스와 클래스
 */
interface DogInterface {
  name: string;
  age: number;
  move(): void;
}

// 인터페이스로 정의한 클래스의 필드는 퍼블릭이어야함
class Dog implements DogInterface {
  constructor(public name: string, public age: number) {}

  move(): void {}
}
