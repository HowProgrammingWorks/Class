'use strict';

const createClass = (name) => {
  const { [name]: Entity } = { [name]: class {} };
  return Entity;
};

const User = createClass('User');

console.log(User); // [class User]
console.log(User.name); // User
