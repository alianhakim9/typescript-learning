const superHeroes: Array<string> = [];
// const superHeroes: string[] = [];
const heroPower: Array<number> = [];

superHeroes.push("spiderman");
heroPower.push(2);

const users: Array<User> = [];

type User = {
  name: string;
  isActived: boolean;
};

let alian: User = {
  name: "Alian",
  isActived: true,
};

let ilyas: User = {
  name: "Ilyas",
  isActived: false,
};

users.push(alian, ilyas);

// two dimensional array in typescript
const mlModels: Array<Array<number>> = [
  [255, 255, 255, 0],
  [0, 0, 0, 0],
];

// const mlModels: number[][] = [
//   [255, 255, 255, 0],
//   [0, 0, 0, 0],
// ];

export {};
