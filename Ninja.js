const pattern = /[abc123]/g;
const text = '1234abc123ninja'
const matches = text.match(pattern)
console.log(matches)

const pattern2 = /[a-zA-Z]/g;
const text2 = 'Mimi ni BAzenga'
const matches2 = text2.match(pattern2)
console.log(matches2)

const pattern3 = /[0-9]/g;
const text3 = 'hello everyone 1234'
const matches3 = text3.match(pattern3)
console.log(matches3)

const phone = /[0-9]{10}/;
const text4 = 'My phone number is 0790674655'
const matches4 = text4.match(phone)
console.log(matches4)
