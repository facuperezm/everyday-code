// Task
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

function maxTriSum(numbers) {
	const unique = [...new Set(numbers)]
	const sortedNumbers = unique.sort((a, b) => b - a)
	const tripletSum = sortedNumbers
		.slice(0, 3)
		.reduce((sum, num) => sum + num, 0)
	return tripletSum
}
