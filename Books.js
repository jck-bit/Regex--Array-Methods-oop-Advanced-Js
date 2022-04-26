class Books{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
}

class Admin extends Books{
   deleteBook(book){
     books = books.filter(b =>{
     return  b.author != book.author
     })
   }
}

var hello = new Books('The devils elixir', 'John')
var you = new Books('sudden Prey', 'Justin')
var admin = new Admin('12 rules for life', 'you')


var books = [hello, you, admin]

admin.deleteBook(hello)
console.log(books.length)
