// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s) {
	const evenChars = []
	const oddChars = []

	for (let i = 0; i < s.length; i++) {
		if (i % 2 === 0) {
			evenChars.push(s[i].toUpperCase())
			oddChars.push(s[i].toLowerCase())
		} else {
			evenChars.push(s[i].toLowerCase())
			oddChars.push(s[i].toUpperCase())
		}
	}

	return [evenChars.join(''), oddChars.join('')]
}
