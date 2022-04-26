function User(email, name){
   this.email = email;
   this.name = name;
   this.online = false;
 
}

User.prototype.login = function(){
   this.online = true
   console.log(this.email, 'has logged in')
}

User.prototype.logout = function(){
   this.online = false
   console.log(this.email, 'has logged out')
}

function Admin(...args){
   User.apply(this, args)
}

var userOne = new User('ryu@gmail.com', 'Ryu')
var userTwo = new User('yoshi@gmail.com','Yoshi')
var admin = new Admin ('shaun@ninja.com', 'shaun')


console.log(admin)


//rest parametre and sprean operator

// function showName (first, last, ...titles){
//    console.log(first + ' ' + last )

//    console.log(titles[0] )
// }

// showName('julius', 'caesar', 'judas', 'yoo')
