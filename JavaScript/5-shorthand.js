'use strict';

const createClass = (name) => ({
  [name]: class {},
})[name];

const User = createClass('User');

console.log(User); // [class User]
console.log(User.name); // User
