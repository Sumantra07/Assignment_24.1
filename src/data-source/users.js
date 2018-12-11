import User from "../models/user";
// This is the data-source, can be replaced with the data on express-server
const users = [
  new User("Suresh", "28 years"),
  new User("Ramesh", "22 years"),
  new User("Ganesh", "42 years"),
  new User("Mahesh", "32 years")
];

export default users;
