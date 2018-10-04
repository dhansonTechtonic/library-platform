function Book(title, author, numPages, pubDate){
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = new Date(pubDate);
};

Book.prototype.editBook = function (obook) {
  //to input a book and edited information
  //loop through the specified book and see if it has the properties I specified
  //if it does then replace the information there to what i have inputted
  if (obook.hasOwnProperty("title")){
    this.title = obook.title;
  };

  if (obook.hasOwnProperty("author")){
    this.author = obook.author;
  };

  if (obook.hasOwnProperty("numPages")){
    this.numPages = obook.numPages;
  };

  return obook;
};
/*
//Publish Dates----------------------------------------------------------------

var lotf = new Date("1954");
var anth = new Date("1938");
var wtnv = new Date("2015");
var carr = new Date("2015");
var fagi = new Date("2013");
var elpa = new Date("2013");
var born = new Date("2016");
var anfa = new Date("1945");
var theg = new Date("1993");
var wisi = new Date("2000");
var sotm = new Date("2001");
var fiso = new Date("2002");
var oddt = new Date("2003");
var atla = new Date("1957");
var glas = new Date("2018");
var scre = new Date("1942");
var dart = new Date("2007");
var fell = new Date("1954");
var twot = new Date("1954");
var king = new Date("1955");


//End Publish Dates------------------------------------------------------------

//Books------------------------------------------------------------------------

var gLibrary = [

  //Lord of the Flies
  lordOfTheFlies = {
    title: "Lord of the Flies",
    author: "William Golding",
    numPages: 224,
    pubDate: lotf.getUTCFullYear(),
  },

  //Anthem
  anthem = {
    title: "Anthem",
    author: "Ayn Rand",
    numPages: 66,
    pubDate: anth.getUTCFullYear(),
  },

  //Welcome to Night Vale
  welcomeToNightVale = {
    title: "Welcome to Night Vale",
    author: "Joseph Fink & Jeffrey Cranor",
    numPages: 416,
    pubDate: wtnv.getUTCFullYear(),
  },

  //Carry On
  carryOn = {
    title: "Carry On",
    author: "Rainbow Rowell",
    numPages: 528,
    pubDate: carr.getUTCFullYear(),
  },

  //Fangirl
  fangirl = {
    title: "Fangirl",
    author: "Rainbow Rowell",
    numPages: 448,
    pubDate: fagi.getUTCFullYear(),
  },

  //Eleanor & Park
  eleanorAndPark = {
    title: "Eleanor & Park",
    author: "Rainbow Rowell",
    numPages: 336,
    pubDate: elpa.getUTCFullYear(),
  },

  //Born a Crime
  bornACrime = {
    title: "Born A Crime",
    author: "Trevor Noah",
    numPages: 304,
    pubDate: born.getUTCFullYear(),
  },

  //Animal Farm
  animalFarm = {
    title: "Animal Farm",
    author: "Georgoe Orwell",
    numPages: 112,
    pubDate: anfa.getUTCFullYear(),
  },

  //The Giver
  theGiver = {
    title: "The Giver",
    author: "Lois Lowry",
    numPages: 240,
    pubDate: theg.getUTCFullYear(),
  },

  //The Wind Singer
  theWindSinger = {
    title: "The Wind Singer",
    author: "William Nicholson",
    numPages: 354,
    pubDate: wisi.getUTCFullYear(),
  },

  //Slaves of the Mastery
  slavesOfTheMastery = {
    title: "Slaves of the Mastery",
    author: "William Nicholson",
    numPages: 352,
    pubDate: sotm.getUTCFullYear(),
  },

  //Firesong
  firesong = {
    title: "Firesong",
    author: "William Nicholson",
    numPages: 352,
    pubDate: fiso.getUTCFullYear(),
  },

  //Odd Thomas
  oddThomas = {
    title: "Odd Thomas",
    author: "Dean Koontz",
    numPages: 446,
    pubDate: oddt.getUTCFullYear(),
  },

  //Atlas Shrugged
  atlasShrugged = {
    title: "Atlas Shrugged",
    author: "Ayn Rand",
    numPages: 1168,
    pubDate: atla.getUTCFullYear(),
  },

  //Glass and Gardens: Solarpunk Summers
  glassAndGardens = {
    title: "Glass and Gardens: Solarpunk Summers",
    author: "Julia K. Patt & Wendy Nikel",
    numPages: 292,
    pubDate: glas.getUTCFullYear(),
  },

  //The Screwtape Letters
  theScrewtapeLetters = {
    title: "The Screwtape Letters",
    author: "C. S. Lewis",
    numPages: 160,
    pubDate: scre.getUTCFullYear(),
  },

  //The Rise and Fall of Darth Vader
  darthVader = {
    title: "The Rise and Fall of Darth Vader",
    author: "Ryder Windham",
    numPages: 197,
    pubDate: dart.getUTCFullYear(),
  },

  //The Fellowship of the Ring
  theFellowshipOfTheRing = {
    title: "The Fellowship of the Ring",
    author: "J. R. R. Tolkein",
    numPages: 423,
    pubDate: fell.getUTCFullYear(),
  },

  //The Two Towers
  theTwoTowers = {
    title: "The Two Towers",
    author: "J. R. R. Tolkein",
    numPages: 352,
    pubDate: twot.getUTCFullYear(),
  },

  //The Return of the King
  theReturnOfTheKing = {
    title: "The Return of the King",
    author: "J. R. R. Tolkein",
    numPages: 416,
    pubDate: king.getUTCFullYear(),
  },

];

//End Books--------------------------------------------------------------------
*/
