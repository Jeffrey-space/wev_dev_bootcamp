// // For loops 

// for(init (var); condition; step) {
// 	// run some code
// }

// // example for loop
// for(var count = 1; count < 6; count++) {
// 	console.log(count);
// }


// // printing a character in a string with a for loop
// var str = "hello";

// for(var i = 0; i < str.length; i++) {
// 	console.log(str[i]);
// }

// exercise for loop
// print all number between -10 and 19

for(var i = -10; i < 20; i++) {
	console.log(i);
}

// print all even numbers between 10 and 40

for(var i = 10; i <= 40; i += 5) {
	if(i % 2 === 0) {
		console.log(i);
	}
}

// print all odd numbers between 300 and 333

for(var i = 300; i <= 333; i++) {
	if(i % 2 !== 0) {
		console.log(i);
	}
}

// print all numbers divisble by 5 and 3 between 5 and 50

for(var i = 5; i <= 50; i++) {
	if(i % 5 === 0 && i % 3 === 0) {
		console.log(i);
	}
}