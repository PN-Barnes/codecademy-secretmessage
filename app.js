let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// Step 1 - remove last string, 'JavaScript' of the array
console.log(secretMessage.length)
secretMessage.pop()
console.log(secretMessage)
// Step 2 - log the length of the array
console.log(secretMessage.length)
// Step 3 - add 'to' and 'program' to end of the array
secretMessage.push('to','Program')
console.log(secretMessage.length);
// Step 4 - Replace value 'easily' with 'right'
console.log(secretMessage.indexOf('easily'))
secretMessage.splice([7],1,'right')
console.log(secretMessage[7])
// Step 5 - remove first string in the array
secretMessage.shift()
console.log(secretMessage.length)
//Step 6 - add string 'Programming' to front of array
secretMessage.unshift('Programming')
console.log(secretMessage[0])
// step 7 - replace 'get' 'right' 'the' 'first' 'time' and replace with 'know'
console.log(secretMessage)
secretMessage.splice([6],5,'know,');
console.log(secretMessage.length)
console.log(secretMessage)
// step 8 - use .join to create a sentence with array
console.log(secretMessage.join(' '))


