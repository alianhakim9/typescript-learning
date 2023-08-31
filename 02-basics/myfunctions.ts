function addTwo(num: number) {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUp(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {
  console.log(`Welcome ${name}!`);
}

let login = (email: string, password: string, isPaid: boolean = false) => {
  console.log(`Welcome back ${email}`);
};

// function with return value type
function addThree(num: number): number {
  return num + 3;
}

// arrow function with return value type
const getHello = (value: string): string => {
  return value;
};

const heroes = ["thor", "spiderman", "iron man"];
const numbers = [1, 2, 3];
const randoms = ["test", 123];
heroes.map((hero): string => {
  return `hero is ${hero}`;
});
numbers.map((num): number => {
  return num;
});
randoms.map((item): number | string => {
  return item;
});

function consoleError(errorMessage: string): void {
  console.error(errorMessage);
}

function handleError(errorMessage: string): never {
  throw new Error(errorMessage);
}

// output

addTwo(10);
getUpper("Alian");
signUp("Alian", "alianhakim9@gmail.com", "RahasiaBanget", true);
login("alianhakim9@gmail.com", "test");
addThree(10);

export {};
