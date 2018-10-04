//function Library(){
//  this.bookShelf = new Array();
//};

(function() {
 var instance;
 Library = function() {
   if (instance) {
     return instance;
   }
   instance = this;
   this.bookShelf = new Array();
 }
})();

Library.prototype.addBook = function (book) {
  for(var i=0; i <this.bookShelf.length; i++) {
    if(this.bookShelf[i].title === book.title) {
      return false;
    };
  };

  this.bookShelf.push(book);
  return true;
};

Library.prototype.removeBookByTitle = function (title) {
  for(var i=0; i <this.bookShelf.length; i++) {
    if(this.bookShelf[i].title === title) {
      this.bookShelf.splice(i,1);
      return true;
    };
  };
  return false;
};

Library.prototype.removeBookByAuthor = function (author) {
  for(var i=0; i <this.bookShelf.length; i++) {
    if(this.bookShelf[i].author === author) {
      this.bookShelf.splice(i,1);
      return true;
    };
  };
  return false;
};

Library.prototype.getRandomBook = function () {
  var randomBook = this.bookShelf[Math.floor(Math.random()*this.bookShelf.length)];
    if(this.bookShelf.length > 0) {
      return randomBook;
    }else {
      return null;
  };
};

Library.prototype.getBookByTitle = function (title) {
  var booksWithTitle = new Array();
  for(var i=0; i <this.bookShelf.length; i++) {
    if(this.bookShelf[i].title.toLowerCase().includes(title.toLowerCase()) || this.bookShelf[i].title.toLowerCase() === title.toLowerCase()) {
      var theRightBook = this.bookShelf[i].title;
      booksWithTitle.push(theRightBook);
    };

  };
  return booksWithTitle;
};

Library.prototype.getBookByAuthor = function (author) {
  var booksWithAuthor = new Array();
  for(var i=0; i <this.bookShelf.length; i++) {
    if(this.bookShelf[i].author.toLowerCase().includes(author.toLowerCase()) || this.bookShelf[i].author.toLowerCase() === author.toLowerCase()) {
      var theRightAuthor = this.bookShelf[i].title;
      booksWithAuthor.push(theRightAuthor);
    };

  };
  return booksWithAuthor;
};

Library.prototype.addBooks = function (books) {
  var numberOfAdds = 0
  for(var i=0; i <books.length; i++) {
      if(this.addBook(books[i])) {
        ++numberOfAdds;
      };
    };
  return numberOfAdds;
};

Library.prototype.getAuthors = function () {
  var foundAuthors = new Array();
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

Library.prototype.getRandomAuthorName = function () {
  var randomAuthor = this.bookShelf[Math.floor(Math.random()*this.bookShelf.length)];
    if(this.bookShelf.length > 0) {
      return randomAuthor.author;
    }else {
      return null;
  };
};

Library.prototype.theBigSearch = function (book) {
  var bookResults = new Array();
  if (book.hasOwnProperty("title")){
    for (i = 0; i < this.bookShelf.length; i++) {
      if (book.title == this.bookShelf[i].title) {
        bookResults.push(this.bookShelf[i]);
      };
    };
  };

  if (book.hasOwnProperty("author")){
    for (i = 0; i < this.bookShelf.length; i++) {
      if (book.author == this.bookShelf[i].author) {
        bookResults.push(this.bookShelf[i]);
      };
    };
  };

  if (book.hasOwnProperty("numPages")){
    for (i = 0; i < this.bookShelf.length; i++) {
      if (book.numPages == this.bookShelf[i].numPages) {
        bookResults.push(this.bookShelf[i]);
      };
    };
  };

  if (book.hasOwnProperty("pubDate")){
    for (i = 0; i < this.bookShelf.length; i++) {
      if (book.pubDate == this.bookShelf[i].pubDate) {
        bookResults.push(this.bookShelf[i]);
      };
    };
  };

  return bookResults;
};

document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();
});
