function detectType(value: number | string) {
  if (typeof value === "string") {
    return value.toLowerCase();
  }
  return value + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.info("please provide id");
    return;
  }
  // db operation
}

interface User {
  name: string;
  email: string;
}

interface Admin extends User {
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin): boolean {
  if ("isAdmin" in account) {
    account.isAdmin;
    return true;
  }
  return false;
}

function logValue(value: Date | string) {
  if (value instanceof Date) {
    value.getDate();
  } else {
    value.toLowerCase();
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

// function isFish(pet: Fish | Bird): boolean {
//   return (pet as Fish).swim !== undefined;
// }

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird food";
  }
}

// type Shape = Circle | Square;

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  // return shape.side * shape.side;
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.length * shape.width;
    default:
      const _defaultForShape: never = shape;
      return _defaultForShape;
  }
}
