import User from "../classes/User";

const alian: User = new User("Alian", "Hakim");

console.info(alian.getFirstName);
console.info(alian.getLastName);
console.info(alian.getFullName);
alian.setNik = "31213213123";
console.info(alian.getNik);
