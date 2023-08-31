// type aliases
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return user;
}

const newUser = createUser({
  name: "",
  email: "",
  isActive: false,
});

console.info(newUser);

export {};
