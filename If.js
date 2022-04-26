// const numbers = [3, 5, 6, 7, 8, 9]

// const newArr = []

// for(let i =0; i<numbers.length; i++){
//     newArr.push(numbers[i] ** 2)
// }

// console.log(newArr)

// ///////////////////////////////////////
// for (const num of numbers){
//     console.log(num * num)
//  }
 
 const WebTechs = [
    'HTML',
    'CSS',
    'javascript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
 ]

for (const tech of WebTechs){
    console.log(tech[1])
}



const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia,',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]




// const countriesLand = countries.filter((country) =>{
//     return country.includes('land')
// })

// const Length = countries.filter((country) =>{
//     return country.length === 5
// })
// console.log(Length)


// console.log(countriesLand)


// const numbers = [4, 5, 78, 45, 67,89, 65]

// const numSquare = numbers.map((num) =>{
//     return num * num
// })

// console.log(numSquare)



// const bools = [true, false, true, true]

// const ona = bools.every((bool) =>{
//   return typeof bool === 'boolean'
// })


// console.log(ona)



// const UPPER = countries.map((country) =>{
//         return country.toUpperCase()
// })

// console.log(UPPER)

// const SLICE = countries.slice(Math.max(countries.length -10, 1))
// console.log(SLICE)



// var array = [1, 55, 77, 88, 76, 59];
// var array_last_five;
// array_last_five = array.slice(-5, 0);
// if (array.length < 6) {
//      array_last_five.shift();
// }

// console.log(array)


// const upper = countries.map((country) =>{
//     return country.toUpperCase()
// })

// const numbers = [4, 5, 78, 45, 67,8, 65]

// const sumArray = arr =>{
//   let sum =0
//   const callback =  function(element){
//     sum += element
//   }
//   arr.forEach(callback)
//   return sum
// }

// console.log(sumArray(numbers))



// const SumArr = arr =>{
//   let sum = 0;
//   arr.forEach(function(element){
//     sum += element
//   })
//   return sum
// }

// console.log(SumArr(numbers))

// function sayHello() {
//   console.log('Hello')
// }

// setInterval(sayHello, 1000)

// let sum = 0
// const numbers = [4, 5, 78, 45, 67,8, 65]

// numbers.forEach((num) =>{
//   sum += num
// })

// console.log(sum)


const count = countries.filter((country)=>{
  country.includes('land')
})

console.log(count)
