'use strict';

const createClass = (name) => {
  const container = { [name]: class {} };
  const Entity = container[name];
  return Entity;
};

const User = createClass('User');

console.log(User); // [class User]
console.log(User.name); // User
