'use strict';

const createClass = () => class {};

const User = createClass();
const user1 = new User();

console.log(User); // [class (anonymous)]
console.log(User.name); // '' - empty string
console.log(user1.constructor.name); // '' - empty string
