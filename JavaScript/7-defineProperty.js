'use strict';

const createClass = (name) => Object.defineProperty(class {}, 'name', {
  value: name,
});

const User = createClass('User');

console.log(User); // [class User]
console.log(User.name); // User
