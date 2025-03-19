function toFahrenheit(celsius) {
 // Write your code here
	let f = (celsius*1.8) + 32;
	return f.toFixed(2)
}

// Do not change the code below
const celsius = prompt("Enter Celsius:"); 
alert(toFahrenheit(Number(celsius)));
