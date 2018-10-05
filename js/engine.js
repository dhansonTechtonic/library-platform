//singleton: makes sure all libraries point back to one
(function() {
 var instance;
 Library = function() {
   if (instance) {
     return instance;
   }
   instance = this;
   this.bookShelf = [];
 }
})();

//addBook: I want to loop through the bookShelf and see if there are already
//books with that title.
//If there are then return false and don't add a book
//If there aren't then add the book to the bookShelf array
//Then send the updates to the localStorage and return true to make sure the
//book was added
Library.prototype.addBook = function (book) {
  for(var i=0; i <this.bookShelf.length; i++) {
    if(this.bookShelf[i].title.toLowerCase().trim() === book.title.toLowerCase().trim()) {
      return false;
    };
  };
  this.bookShelf.push(book);
  this.setLibrary();
  return true;
};

//removeBookByTitle: I want to loop through the bookShelf and see if there is a
//book that matches the title that was inputted.
//If there is then I want to remove that book from my array, update localStorage,
// and return true
//If there is not then I want to return false
Library.prototype.removeBookByTitle = function (title) {
  for(var i=0; i <this.bookShelf.length; i++) {
    if(this.bookShelf[i].title.toLowerCase().trim() === title.toLowerCase().trim()) {
      this.bookShelf.splice(i,1);
      this.setLibrary();
      return true;
    };
  };
  return false;
};

//removeBookByAuthor: same as remove book by title but I have to make sure the
//loop starts in the right place and doesn't skip over any books
Library.prototype.removeBookByAuthor = function (author) {
  var booksRemoved = 0;
  for(var i=0; i <this.bookShelf.length; i++) {
    if(this.bookShelf[i].author.toLowerCase().trim() === author.toLowerCase().trim()) {
      this.bookShelf.splice(i,1);
      this.setLibrary();
      booksRemoved++;
      i--;
    };
  };
  if (booksRemoved > 0) {
    return true;
  }
  return false;
};

//getRandomBook: I want to produce a random title and if there are books in the
//array then I want to return that random book title.
//If there are not then I want to return null
Library.prototype.getRandomBook = function () {
  var randomBook = this.bookShelf[Math.floor(Math.random()*this.bookShelf.length)];
    if(this.bookShelf.length > 0) {
      return randomBook;
    }else {
      return null;
  };
};

//getBookByTitle: I want to creat an array that will hold the book results
//then I want to loop through the bookShelf and see if there are titles that
//have all or some of what was inputted
//If there is then I want to add those books to the array and return the array
Library.prototype.getBookByTitle = function (title) {
  var booksWithTitle = [];
  for(var i=0; i <this.bookShelf.length; i++) {
    if(this.bookShelf[i].title.toLowerCase().trim().indexOf(title.toLowerCase().trim()) > -1) {
      booksWithTitle.push(this.bookShelf[i]);
    };

  };
  return booksWithTitle;
};


//getBookByAuthor: same as getBookByTitle but with authors
Library.prototype.getBookByAuthor = function (author) {
  var booksWithAuthor = [];
  for(var i=0; i <this.bookShelf.length; i++) {
    if(this.bookShelf[i].author.toLowerCase().trim().indexOf(author.toLowerCase().trim()) > -1) {
      booksWithAuthor.push(this.bookShelf[i]);
    };

  };
  return booksWithAuthor;
};

//addBooks: I want to start a count of how many books are added to my bookShelf
//I want to add books using my addBook function
//I want to loop through the array of books that are added and count one for
//each book added
//Then I want to save to localStorage and return how many books were added
Library.prototype.addBooks = function (books) {
  var numberOfAdds = 0
  for(var i=0; i <books.length; i++) {
      if(this.addBook(books[i])) {
        ++numberOfAdds;
      };
    };
  this.setLibrary();
  return numberOfAdds;
};

//getAuthors: I want to create an array that displays all the authors
//If there are no books in the bookShelf return foundAuthors(nothing)
//If there are books then add the first author to the array to initiate the loop
//Then I want to loop through my bookShelf and through my foundAuthors and see
//if they have any names that aren't in foundAuthors then add them
//If they are there then skip over them
//Then return the authors
Library.prototype.getAuthors = function () {
  var foundAuthors = [];
    if (this.bookShelf.length === 0) {
    return foundAuthors;
    }else {
    foundAuthors.push(this.bookShelf[0].author);
    };
  for(i = 0 ; i < this.bookShelf.length; i++){
    for(x = 0; x < foundAuthors.length; x++){
      if (!(foundAuthors.includes(this.bookShelf[i].author))){
        foundAuthors.push(this.bookShelf[i].author);
      };
    };
  };
  return foundAuthors;
};

//getRandomAuthorName: same as getRandomBook
Library.prototype.getRandomAuthorName = function () {
  var randomAuthor = this.bookShelf[Math.floor(Math.random()*this.bookShelf.length)];
    if(this.bookShelf.length > 0) {
      return randomAuthor.author;
    }else {
      return null;
  };
};

//theBigSearch: I want to take in the user's input and separate it into separate
//strings
//Then I want to create an array for my results
//Then I want to loop through the strings and use getBookByTitle and
//getBookByAuthor to push books that match those strings
//Then I want to create a new array that merges results and filters through and
//get rid of duplicates
//Then return the merged results
Library.prototype.theBigSearch = function(entry) {
  userEntry = entry.split(" ");
  var beforeResults = [];
  for (var i = 0; i < userEntry.length; i++) {
    beforeResults.push(this.getBookByTitle(userEntry[i]));
    beforeResults.push(this.getBookByAuthor(userEntry[i]));
  };
  var afterResults = [].concat.apply([],beforeResults);
  actualResults = afterResults.filter(function(value,index,self){
  return self.indexOf(value) === index;});
  return actualResults;
  };

//setLibrary: I want to send my bookShelf to localStorage as a string and return
//"Library saved"
Library.prototype.setLibrary = function () {
  localStorage.setItem("storedStuff", JSON.stringify(this.bookShelf));
  return "Library Saved";
};


//getLibrary: I want to get and information that changed from the localStorage
//and make it an object again
//Then I want to loop through the bookShelf and make that new object a book so
//it can be updated
Library.prototype.getLibrary = function () {
  this.bookShelf = JSON.parse(localStorage.getItem("storedStuff"));
  for( var i = 0; i < this.bookShelf.length; i++) {
    this.bookShelf[i] = new Book(this.bookShelf[i].title, this.bookShelf[i].author, this.bookShelf[i].numPages, this.bookShelf[i].pubDate);
  };
};


document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();
  if (localStorage.getItem("storedStuff")) {
    gLibrary.getLibrary();
    console.log("Library found");
  }else {
    console.log("No library");
  };
});
