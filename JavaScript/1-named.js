'use strict';

const createClass = () => class Entity {};

const User = createClass();

console.log(User); // [class Entity]
console.log(User.name); // Entity
