import User from "./User";

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 2;
  }
}

export default SubUser;
