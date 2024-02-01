/**
 * 첫 번째 사례
 */
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap(1, "2");

/**
 * 두 번째 사례
 */
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

returnFirstValue([1, 2, 3]);
returnFirstValue([1, "2", 3]);

/**
 * 세 번째 사례
 */
interface InterfaceA {
  length: number;
}

interface InterfaceB extends InterfaceA {}

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);

let var2 = getLength("123");

let var3 = getLength({ length: 10 });

let var4 = getLength(10);
