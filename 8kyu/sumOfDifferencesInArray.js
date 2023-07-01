// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

function sumOfDifferences(arr) {
	const sorted = arr.sort((a, b) => b - a)
	let sum = 0
	for (let i = 0; i < sorted.length - 1; i++) {
		let diff = sorted[i] - sorted[i + 1]
		sum += diff
	}
	return sum
}
