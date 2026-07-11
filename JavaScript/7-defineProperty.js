'use strict';

const createClass = (name) => Object.defineProperty(class {}, 'name', {
  value: name,
});

const User = createClass('User');
const user1 = new User();

console.log(User); // [class User]
console.log(User.name); // User
console.log(user1.constructor.name); // User
