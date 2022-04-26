// const txt = 'Python is the most beautiful language that a human being has ever created.\
// I recommend python for a first programming language'


// const matchreplace = txt.replace(/Python/g, 'JavaScript')
// console.log(matchreplace)

// const jn = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
// T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
// p%e%o%ple.\
// I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
// D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

// const hello = jn.replace(/%/g, '');
// console.log(hello) 

const pattern  =  /\d+/g;
const text = 'Am from January 12, 2020'

const matches = text.match(pattern)
console.log(matches)
 
const pattern2 = /[a].+/g;
const text2 = 'Apple and bananas are fruits'
const matches2 = text2.match(pattern2) 
console.log(matches2)

const txt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern3 = /[Ee]-?mail/g;
const matches3 = txt.match(pattern3)
console.log(matches3)

const password = 'This pasword is made in December 6, 2019'
const pattern4 = /\\b\w{4}\b/g;
const matches4 = password.match(pattern4)
console.log(matches4)