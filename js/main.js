//an array of quotes
const quotes = [
  { quote: '"Programming is like writing a great novel. You start with an idea and then revise and revise until it\'s just right."', author: '- Bill Gates.' },
  { quote: '"The computer science was born to solve problems that did not exist before."', author: '- Bill Gates.' },
  { quote: '"Life is not about finding yourself Life is about creating yourself."', author: '- George Bernard Shaw.' },
  { quote: '"The only way to do great work is to love what you do."', author: '- Steve Jobs.' },
  { quote: '"The most important relationship you have is with yourself."', author: '- Anonymous' },
  { quote: '"The greatest weapon against stress is our ability to choose one thought over another."', author: '- William James' },
  { quote: '"The only way to discover the limits of the possible is to go beyond them into the impossible."', author: '- Arthur C Clarke' },
  { quote: '"It\'s never too late to be what you might have been."', author: '- George Eliot' },
  { quote: '"The secret of getting ahead is getting started."', author: '- Mark Twain' },
  { quote: '".اللهُم لا تجعلني ممن يستهزئ بعبادك ثم يبتلى، اللهُم إني اعوذ بك من شر لساني، ومن شر نظري، و أعوذ بك من شر نفسي"', author: '- Duaa' },
  { quote: '"رَبِّ اجعَلني مُقيمَ الصَّلاةِ وَمِن ذُرِّيَّتي رَبَّنا وَتَقَبَّل دُعاءِ"', author: '- -إبراهيم - 40' }
];

let btn = document.querySelector('#Qbtn');
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let likeButton = document.querySelector(".like-icon");
let favoriteQuotes = [];
let favoriteQuotesContainer = document.querySelector("#favorite-quotes");
// Add event listener to the button to display a random quote when clicked
btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);
  let selectedQuote = quotes[random];
  quote.textContent = selectedQuote.quote;
  author.textContent = selectedQuote.author;
});
// Add event listener to the like button to save the current quote as a favorite
likeButton.addEventListener('click', function () {
  let currentQuote = quote.textContent;
  let currentAuthor = author.textContent;
// Find the selected quote object from the array
  let selectedQuote = quotes.find(function (quoteObj) {
    return quoteObj.quote === currentQuote && quoteObj.author === currentAuthor;
  });
// Check if the quote is found and not already in the favorites
  if (selectedQuote && !favoriteQuotes.includes(selectedQuote)) {
    // Add the quote to the favoriteQuotes array
    favoriteQuotes.push(selectedQuote);
// Create a new list item to display the quote in the favorite quotes container
    let listItem = document.createElement("li");
    listItem.textContent = `${selectedQuote.quote} ${selectedQuote.author}`;
    listItem.style.padding = '8px';
    listItem.style.fontSize='1.2rem';
    

    favoriteQuotesContainer.appendChild(listItem);
  }
});
