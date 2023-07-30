// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
	let ascending = true
	let descending = true
	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] > array[i + 1]) {
			ascending = false
		}
		if (array[i] < array[i + 1]) {
			descending = false
		}
	}
	if (ascending) {
		return 'yes, ascending'
	} else if (descending) {
		return 'yes, descending'
	} else {
		return 'no'
	}
}
