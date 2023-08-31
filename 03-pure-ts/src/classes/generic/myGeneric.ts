const scores: Array<number> = [];
const names: Array<string> = [];

function identityOne(arg: boolean | number): number | boolean {
  return arg;
}

function identityTwo(arg: any): any {
  return arg;
}

// generic
function identityThree<T>(arg: T): T {
  return arg;
}

// calling generic function
identityThree<Array<number>>(scores);
// identityThree(scores);
identityThree<Array<string>>(names);
// identityThree(names);

// generic on interface
interface Bootle {
  brand: string;
  type: number;
}

identityThree<Bootle>({
  brand: "Aqua",
  type: 3,
});

// generic with array
function getSearchProducts<T>(products: Array<T>): T {
  // do some database operation
  const myIndex = 3;
  return products[myIndex];
}

// with arrow function
const getMoreSearchProducts = <T>(products: Array<T>): T => {
  // do some database operation
  const myIndex = 4;
  return products[myIndex];
};
