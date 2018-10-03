function Library(){
  this.bookShelf = new Array();
};

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
    if(this.bookShelf[i].title.includes(title) || this.bookShelf[i].title === title) {
      var theRightBook = this.bookShelf[i].title;
      booksWithTitle.push(theRightBook);
    };

  };
  return booksWithTitle;
};

Library.prototype.getBookByAuthor = function (author) {
  var booksWithAuthor = new Array();
  for(var i=0; i <this.bookShelf.length; i++) {
    if(this.bookShelf[i].author.includes(author) || this.bookShelf[i].author === author) {
      var theRightAuthor = this.bookShelf[i].title;
      booksWithAuthor.push(theRightAuthor);
    };

  };
  return booksWithAuthor;
};

Library.prototype.addBooks = function (book) {
  var numberOfAdds = 0
  for(var i=0; i <book.length; i++) {
      addBook(book);
      if(addBook(book) === true) {
        ++numberOfAdds;
      };
    };
    return numberOfAdds;
  };


document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();
});
