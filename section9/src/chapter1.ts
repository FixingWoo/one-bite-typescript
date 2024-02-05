/**
 * 분산적인 조건부 타입
 * 조건부 타입에 유니온 타입을 할당하면 분산적인 조건부 타입이 됨
 * 한 번은 number, 한 번은 string으로 전달됨
 */
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<boolean | string | number>;
/**
 * 1단계
 * StringNumberSwitch<boolean>
 * StringNumberSwitch<number>
 * StringNumberSwitch<string>
 *
 * 2단계
 * number | string | number
 *
 *
 * 결과
 * number | string
 */

/**
 * 예제
 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

/**
 * 1단계
 * Exclude<number, string> |
 * Exclude<string, string> |
 * Exclude<boolean, string>
 *
 * 2단계
 * number |
 * never |
 * boolean
 *
 * 결과
 * number | boolean
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
