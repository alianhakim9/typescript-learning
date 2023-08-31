let score: number | string | boolean;
score = 44;
score = "A";
score = true;

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let alian: User | Admin = {
  name: "Alian",
  id: 12,
};

alian = {
  username: "alianhakim.id",
  id: 13,
};

function getUserById(id: number | string) {
  console.log(`user with id ${id}`);
}

getUserById("3");
getUserById(3);

function getDbId(id: number | string) {
  if (typeof id === "string") id.toLowerCase();
  if (typeof id === "number") id + 2;
}

// with array
const data: Array<number | string> = [1, 2, 3, 4, 5, "10"];
