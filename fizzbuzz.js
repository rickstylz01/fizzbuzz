// Write a program that prints the numbers from 1 to 100. If it’s a multiple of 3, it should print “Fizz”. If it’s a multiple of 5, it should print “Buzz”. If it’s a multiple of 3 and 5, it should print “Fizz Buzz”.

// input: getting a number from 1-100
// output: if it's multiple by 5 it should print out "Fizz". if it's multiple by 3 then it should print out "buzz", if it's multiple by 3 and 5 then "Fizzbuzz" should print out.

// find out if it's multiple of both 3 and 5
// if its a multiple of 5 it should print "fizz"
// if it's a multiple of 3 then "buzz"
// if it's a multiple of both then print out "fizzbuzz"

// Get a code from 1-100
function doFizzBuzz(incomingNumber) {
// find out if it's a multiple of 5

	if(incomingNumber % 5 === 0 ) {
		console.log("fizz");
	}
	// find out if its a multiple of 3
	else(incomingNumber % 3 === 0) {
		console.log("buzz");
	}
}

