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
