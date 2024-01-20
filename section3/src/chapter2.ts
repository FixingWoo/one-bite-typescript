/**
 * Unknown 타입
 * 전체 집합 - 모든 타입의 슈퍼 타입
 */
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "a";
  let c: unknown = true;

  let unknownVar: unknown;

  let num: number = unknownVar;
}

/**
 * Never 타입
 * 공집합 - 모든 타입의 서브 타입
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
}

/**
 * Void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log("1");
  }

  let voidVar: void = undefined;
}

/**
 * Any 타입
 * Never 타입 제외 한 모든 타입의 슈퍼, 서브 타입
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;
  neverVar = anyVar;
}
