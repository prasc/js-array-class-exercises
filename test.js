function Person() {}

Person.prototype.firstName = "P";
Person.prototype.lastName = "C";
Person.prototype.age = 0;
Person.prototype.setFirstName = function(name) {
  this.firstName = name;
};
Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

const P = new Person();

console.log(P.firstName);
P.setFirstName("Prashath");

console.log(P.firstName);
