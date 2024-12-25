// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.
function switcher(x) {
	const result = x.map(charCode => {
		const num = parseInt(charCode)
		if (num >= 1 && num <= 26) {
			return String.fromCharCode(26 - num + 97)
		} else if (num === 27) {
			return '!'
		} else if (num === 28) {
			return '?'
		} else if (num === 29) {
			return ' '
		}
	})

	return result.join('')
}
