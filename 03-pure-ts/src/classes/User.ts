// class User {
//   public firstName: string;
//   public lastName: string;
//   readonly city: string = "Bandung";
//   private _nik: string;
//   constructor(firstName: string, lastName: string, _nik: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this._nik = _nik;
//   }
// }

// professional code
class User {
  readonly city: string = "Bandung";
  private _nik: string = "";
  protected _courseCount: number = 1;
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public get getFirstName(): string {
    return this.firstName;
  }

  public get getLastName(): string {
    return this.lastName;
  }

  public get getNik(): string {
    return this._nik;
  }

  public get getFullName(): string {
    return `${this.getFirstName} ${this.getLastName}`;
  }

  public set setNik(value: string) {
    if (value === "") {
      throw new Error("value can't be empty");
    }
    this._nik = value;
  }
}

export default User;
