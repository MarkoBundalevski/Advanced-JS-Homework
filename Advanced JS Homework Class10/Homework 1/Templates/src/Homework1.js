class Library{
    constructor(name,books,address){
        this.name=name;
        this.books=books;
        this.address=address;
        this.numOfMembers=books.length*15;
    }

    PrintBooks=function(){
        this.books.forEach(book=>{
            console.log(book);
        });
    }

    AddBook = function(book){
        const b = Object.create(book);
        this.books.push(new Book(b.title,b.genre,b.libraries,b.authors));
    }
}

class Book{
    constructor(title,genre,libraries,authors){
        this.title=title;
        this.genre=genre;
        this.libraries=libraries;
        this.authors=authors;
    }

    AddLibrary=function(library){
        library.books.push(this);
        this.libraries.push(library);
    }
    RemoveLibrary=function(library){
        const foundLibrary=this.libraries.indexOf(library);
        if(foundLibrary > -1){
            const foundBook=library.books.indexOf(this);
            if(foundBook > -1){
                library.books.splice(foundBook, 1);
            }
            this.libraries.splice(foundLibrary, 1);
        }
    }
}

class Author{
    constructor(firstName,lastName,yearOfBirth){
        this.firstName=firstName;
        this.lastName=lastName;
        this.yearOfBirth=yearOfBirth;
        this.books = [];
        this.currentBook = null;
    }

    StartBook=function(book){
        let foundExistingBook=this.books.indexOf(book);
        if(foundExistingBook===-1){
            this.books.push(book);
        }
        if(this.currentBook){
            foundExistingBook=this.books.indexOf(this.currentBook);
            if(foundExistingBook===-1){
                this.books.push(this.currentBook);
            }
        }
        this.currentBook=book;
    }
}

const library1=new Library('Library 1',[],'Skopje');
const almightyAuthor=new Author('Christie','Golden',1975);

new Book('Harry Potter','Adventure',[],[almightyAuthor]).AddLibrary(library1);
new Book('Lord of the Rings','Adventure',[],[almightyAuthor]).AddLibrary(library1);
new Book('The Hobbit','Action',[],[almightyAuthor]).AddLibrary(library1);
new Book('Arthas','Fantasy',[],[almightyAuthor]).AddLibrary(library1);

almightyAuthor.StartBook(library1.books[0]);
almightyAuthor.StartBook(library1.books[1]);

library1.PrintBooks();