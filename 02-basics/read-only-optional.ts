type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActived: boolean;
  // optional
  creditCardDetails?: CardDetails;
};

let myUser: User = {
  _id: "12345",
  name: "a",
  email: "a@a.com",
  isActived: true,
};

myUser.email = "alianhakim@gmail.com";
// myUser._id = "54321" // can't assign because _id have a readonly keyword

type CardNumber = {
  cardNumber: string;
};

type CardDate = {
  cardDate: string;
};

type CardDetails = CardNumber &
  CardDate & {
    cvv: number;
  };

export {};
