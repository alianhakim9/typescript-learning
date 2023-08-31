const user: Array<string | number | boolean> = ["ah", 1, false];
// using tuples
let users: [string, number, boolean];
users = ["AH", 131, true];

let rgb: [number, number, number, number] = [255, 255, 255, 0];

type User = [number, string];
const newUser: User = [112, "Alian"];
