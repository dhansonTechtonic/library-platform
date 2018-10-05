function Book(title, author, numPages, pubDate){
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = (new Date(pubDate.toString())).getUTCFullYear();
};

Book.prototype.editBook = function (obook) {
  for(var i = 0; i < gLibrary.bookShelf.length; i++) {
    if (obook.hasOwnProperty("title") && ((obook.title.toLowerCase().trim()) !== (gLibrary.bookShelf[i].title.toLowerCase().trim()))) {
      this.title = obook.title;
    }else {
      return false;
    };

    if (obook.hasOwnProperty("author")){
      this.author.toLowerCase().trim() = obook.author.toLowerCase().trim();
    };

    if (obook.hasOwnProperty("numPages")){
      this.numPages.toLowerCase().trim() = obook.numPages.toLowerCase().trim();
    };
  };
  gLibrary.setLibrary();
  return obook;
};
/*

gLibrary.addBook(new Book("Lord of the Flies", "William Golding", 224, 1954))

gLibrary.addBooks([new Book("Anthem","Ayn Rand",66,1938), new Book("Welcome to Night Vale","Joseph Fink & Jeffrey Cranor",416,2015), new Book("Carry On","Rainbow Rowell",528,2015), new Book("Fangirl","Rainbow Rowell",448,2013), new Book("Eleanor & Park","Rainbow Rowell",336,2013), new Book("Born A Crime","Trevor Noah",304,2016), new Book("Animal Farm","Georgoe Orwell",112,1945), new Book("The Giver","Lois Lowry",240,1993), new Book("The Wind Singer","William Nicholson",354,2000), new Book("Slaves of the Mastery","William Nicholson",352,2001), new Book("Firesong","William Nicholson",352,2002), new Book("Odd Thomas","Dean Koontz",446,2003), new Book("Atlas Shrugged","Ayn Rand",1168,1957), new Book("Glass and Gardens: Solarpunk Summers","Julia K. Patt & Wendy Nikel",292,2018), new Book("The Screwtape Letters","C. S. Lewis",160,1942), new Book("The Rise and Fall of Darth Vader","Ryder Windham",197,2007), new Book("The Fellowship of the Ring","J. R. R. Tolkien",423,1954), new Book("The Two Towers","J. R. R. Tolkien",352,1954), new Book("The Return of the King","J. R. R. Tolkien",416,1955), new Book("The Hitchhiker's Guide to the Galaxy","Douglas Adams",224,1979)])

gLibrary.removeBookByTitle("Animal Farm")

gLibrary.removeBookByAuthor("J. R. R. Tolkien")

gLibrary.getRandomBook()

gLibrary.getBookByTitle("The Rise and Fall of Darth Vader")

gLibrary.getBookByTitle("he")

gLibrary.getBookByAuthor("Dean Koontz")

gLibrary.getBookByAuthor("&")

gLibrary.getAuthors()

gLibrary.getRandomAuthorName()

gLibrary.theBigSearch("adams william")

gLibrary.bookShelf[0].editBook({title:"The Giver"})

gLibrary.bookShelf[0].editBook({title:"Lady of the Flies"})
*/
