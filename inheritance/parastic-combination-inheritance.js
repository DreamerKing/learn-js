function object(o) {
	function F() {}
	F.prototype = o;
	return new F();
}

function inheritPrototype(subType, superType) {
	var prototype = object(superType.prototype);
	prototype.constructor = subType;
	subType.prototype = prototype;
}

function SuperType(name){
	this.name = name;
	this.colors = ["red", "green"]
}

SuperType.prototype.sayName = function() {
	console.log(this.name);
};

function SubType(name, age) {
	SuperType.call(this, name);
	this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.showAge = function() {
	console.log(this.age);
};

var sub1 = new SubType("Dreamer", 20);
sub1.colors.push("gray");
console.log(sub1.colors);
sub1.sayName();
sub1.showAge();


var sub2 = new SubType("King", 22);
sub2.colors.push("blue");
console.log(sub2.colors);
sub2.sayName();
sub2.showAge();

console.log(sub2 instanceof SuperType);