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
