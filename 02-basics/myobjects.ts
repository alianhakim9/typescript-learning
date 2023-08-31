const user = {
  name: "Alian",
  email: "alian@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({
  name: "Ilyas",
  isPaid: false,
});

function createCourse(): {
  name: string;
  price: number;
} {
  return {
    name: "reactjs",
    price: 399,
  };
}

export {};
