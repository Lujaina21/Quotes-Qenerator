var avatar = document.getElementById("avatar");
var author = document.getElementById("author");
var quote = document.getElementById("quote");

var quotes = [
  {
    quote:
      "“ Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. ”",
    author: "Bernard M. Baruch",
    avatar: "./imgs/bernard.jpg",
  },
  {
    quote:
      "“ You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth. ”",
    author: "William W. Purkey",
    avatar: "./imgs/william.jpg",
  },
  {
    quote:
      "“ You know you're in love when you can't fall asleep because reality is finally better than your dreams. ”",
    author: "Dr. Seuss",
    avatar: "./imgs/suess.jpg",
  },
  {
    quote: "“ You only live once, but if you do it right, once is enough. ”",
    author: "Mae West",
    avatar: "./imgs/mae.jpg",
  },
  {
    quote: "“ Be the change that you wish to see in the world. ”",
    author: "Mahatma Gandhi",
    avatar: "./imgs/mahatma.jpg",
  },
  {
    quote:
      "“ In three words I can sum up everything I've learned about life: it goes on. ”",
    author: "Robert Frost",
    avatar: "./imgs/robert.jpg",
  },
];

var prevQuote = -1; //starting

function generateQuote() {
  var randomQuote;

  do {
    randomQuote = Math.floor(Math.random() * quotes.length);
  } while (randomQuote === prevQuote);

  var selectedQuote = quotes[randomQuote];

  quote.innerHTML = selectedQuote.quote;
  author.innerHTML = selectedQuote.author;
  avatar.src = selectedQuote.avatar;

  prevQuote = randomQuote; //updating
}
