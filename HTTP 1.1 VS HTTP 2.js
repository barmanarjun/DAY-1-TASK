Difference between HTTP1.1 vs HTTP2:

Developed by Timothy Berners-Lee in 1989 as a communication standard for the World Wide Web, HTTP is a top-level application protocol that act like a pipeline exchanging 
information between a client computer and a local or remote web server. In this process, a client sends a text-based request to a server by calling a method like GET or POST.
In response, the server sends a resource like an HTML page back to the client. As a request-response protocol, HTTP gives users a way to interact with web resources such as
HTML files by transmitting hypertext messages between clients and servers. Each HTTP request made across the Internet carries with it a series of encoded data that carries 
different types of information.


One of the most significant features that distinguishes HTTP/1.1 and HTTP/2 is the binary framing layer.As opposed to HTTP/1.1, which keeps all requests and responses in 
plain text format, HTTP/2 uses the binary framing layer to encapsulate all messages in binary format, while still maintaining HTTP semantics, such as verbs, methods, 
and headers.


Objects and its internal representation in Javascript:

Objects : All JavaScript values, except primitives, are objects. Objects are variables too. Object values are written as name : value pairs(name and value separated by a colon).
For example let person = {firstName:"Arjun", lastName:"Barman", age:24, hairColor:"black"};
Hence we can say A JavaScript object is a collection of named values. 

Object Properties : The named values, in JavaScript objects, are called properties. For example
property==> firstName ,  property value==> Arjun ,  property==> lastName ,  property value==> Barman ,

Object Methods : Methods are actions that can be performed on objects. An object method is an object property containing a function definition.
fullName	function() {return this.firstName + " " + this.lastName;}
Hence we can say JavaScript objects are containers for named values, having properties and methods.

