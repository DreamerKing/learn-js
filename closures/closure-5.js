var makeCounter = function() {
	var privateCounter  = 0;
	function changeBy(val) {
		privateCounter += val;
	}

	return {
		increment: function() {
			changeBy(1);
		},
		decrement: function() {
			changeBy(-1);
		},

		value: function() {
			return privateCounter;
		}
	}
};

var counter1 = makeCounter();
var counter2 = makeCounter();
counter1.increment();
console.log(counter1.value(), counter2.value());
counter1.increment();
counter2.increment();
console.log(counter1.value(), counter2.value());
counter1.decrement();
console.log(counter1.value(), counter2.value());
