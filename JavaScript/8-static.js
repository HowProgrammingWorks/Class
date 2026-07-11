'use strict';

const createClass = (name) => class { static name = name };

const User = createClass('User');
const user1 = new User();

console.log(User); // [class User] { name: 'User' }
console.log(User.name); // User
console.log(user1.constructor.name); // User
