'use strict';

const createClass = () => {
  const Entity = class {};
  return Entity;
};

const User = createClass();

console.log(User); // [class Entity]
console.log(User.name); // Entity
