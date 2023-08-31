interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

// reopened interface
interface User {
  githubToken: string;
}

// inheritance interface
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const alian: Admin = {
  dbId: 12,
  email: "alian@mail.com",
  userId: 122,
  githubToken: "github",
  role: "admin",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "Alian", off: 20) => {
    console.log(`coupon with name ${name} with value ${off}`);
    return 10;
  },
};

console.info(alian.startTrail());
