// Your code here

function greet() {
	const currYear = new Date().getFullYear();

	const getName = prompt("What is your name?");
	alert(`Hello, ${getName}`);

	const getAge = prompt("How old are you?");
	const age = parseInt(getAge);

	const confBday = confirm("Have you had a birthday yet?");
	const thisYear = currYear - age;
	const prevYear = currYear - (age + 1);

	if (confBday) {
		alert(`You were born in ${thisYear}`);
	} else if (!confBday) {
		alert(`You were born in ${prevYear}`);
	}
}
