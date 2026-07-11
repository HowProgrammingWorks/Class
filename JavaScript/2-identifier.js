'use strict';

const createClass = () => {
  const Entity = class {};
  return Entity;
};

const User = createClass();
const user1 = new User();

console.log(User); // [class Entity]
console.log(User.name); // Entity
console.log(user1.constructor.name); // Entity
