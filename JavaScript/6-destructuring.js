'use strict';

const createClass = (name) => {
  const { [name]: Entity } = { [name]: class {} };
  return Entity;
};

const User = createClass('User');
const user1 = new User();

console.log(User); // [class User]
console.log(User.name); // User
console.log(user1.constructor.name); // User
