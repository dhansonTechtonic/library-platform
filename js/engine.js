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
  this.setLibrary();
  return true;
};

Library.prototype.removeBookByTitle = function (title) {
  for(var i=0; i <this.bookShelf.length; i++) {
    if(this.bookShelf[i].title === title) {
      this.bookShelf.splice(i,1);
      return true;
    };
  };
  this.setLibrary();
  return false;
};

Library.prototype.removeBookByAuthor = function (author) {
  var booksRemoved = 0;
  for(var i=0; i <this.bookShelf.length; i++) {
    if(this.bookShelf[i].author === author) {
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
    if(this.bookShelf[i].title.toLowerCase().indexOf(title.toLowerCase()) > -1) {
      booksWithTitle.push(this.bookShelf[i]);
    };

  };
  return booksWithTitle;
};

Library.prototype.getBookByAuthor = function (author) {
  var booksWithAuthor = new Array();
  for(var i=0; i <this.bookShelf.length; i++) {
    if(this.bookShelf[i].author.toLowerCase().indexOf(author.toLowerCase()) > -1) {
      booksWithAuthor.push(this.bookShelf[i]);
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
  this.setLibrary();
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

Library.prototype.theBigSearch = function(entry) {
  userEntry = entry.split(" ");
  var beforeResults = new Array();
  for (var i = 0; i < userEntry.length; i++) {
    beforeResults.push(this.getBookByTitle(userEntry[i]));
    beforeResults.push(this.getBookByAuthor(userEntry[i]));
  };
  var afterResults = new Array().concat.apply([],beforeResults);
  actualResults = afterResults.filter(function(value,index,self){
  return self.indexOf(value) === index;});
  return actualResults;
  };

Library.prototype.setLibrary = function () {
  localStorage.setItem("storedStuff", JSON.stringify(this.bookShelf));
  return "Library Saved";
};

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
