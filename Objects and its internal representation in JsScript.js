Objects and its internal representation in Javascript:

Objects : All JavaScript values, except primitives, are objects. Objects are variables too. Object values are written as name : value pairs (name and value separated by a colon).
For example let person = {firstName:"Arjun", lastName:"Barman", age:24, hairColor:"black"};
Hence we can say A JavaScript object is a collection of named values. 

Object Properties : The named values, in JavaScript objects, are called properties. For example
property==> firstName ,  property value==> Arjun ,  property==> lastName ,  property value==> Barman ,

Object Methods : Methods are actions that can be performed on objects. An object method is an object property containing a function definition.
fullName	function() {return this.firstName + " " + this.lastName;}
Hence we can say JavaScript objects are containers for named values, having properties and methods.
