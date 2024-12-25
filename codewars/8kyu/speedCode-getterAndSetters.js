// Philosophy
// This Kata series aims to test your ability to quickly recall programming language features and apply them appropriately and efficiently. For example, if you are asked to return the square root of a number, you are expected to recall the built-in method Math.sqrt(number) immediately instead of sitting down thinking for 5 minutes before programming a custom algorithm that calculates the square root of a number.

// Objective (named "Task" in my other Kata)
// Define a variable person which stores an object literal. The object literal should have the following properties:

// A firstName of "Jane"
// A lastName of "Doe"
// The object literal should then have a getter and setter called fullName which returns and parses the full name of the person respectively. A full name is defined as follows: If the first name is "Jane" and the last name is "Doe" then the full name is "Jane Doe" and vice versa. You may assume all full names are valid when parsing them.

// Get your timer out and get ready. Ready, get set, GO!!! :D

const person = {
	firstName: 'Jane',
	lastName: 'Doe',
	get fullName() {
		return `${this.firstName} ${this.lastName}`
	},
	set fullName(name) {
		const parts = name.split(' ')
		if (parts.length === 2) {
			this.firstName = parts[0]
			this.lastName = parts[1]
		}
	}
}
