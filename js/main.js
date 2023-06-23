const quotes =[{ quote:'"Programming is like writing a great novel. You start with an idea and then revise and revise until it\'s just right."',
author:'- Bill Gates.'},{ quote:'"The computer science was born to solve problems that did not exist before."',
author:'- Bill Gates.'},{ quote:'"Life is not about finding yourself Life is about creating yourself."',
author:'- George Bernard Shaw.'},{ quote:'"The only way to do great work is to love what you do."',
author:'- Steve Jobs.'},{ quote:'"The most important relationship you have is with yourself."',
author:'- Anonymous'},{ quote:'"The greatest weapon against stress is our ability to choose one thought over another."',
author:'- William James'},{ quote:'"The only way to discover the limits of the possible is to go beyond them into the impossible."',
author:'-Arthur C Clarke'},{ quote:'"It\'s never too late to be what you might have been."',
author:'- George Eliot'},{ quote:'"The secret of getting ahead is getting started."',
author:'- Mark Twain'},{ quote:'".اللهُم لا تجعلني ممن يستهزئ بعبادك ثم يبتلى، اللهُم إني اعوذ بك من شر لساني، ومن شر نظري، و أعوذ بك من شر نفسي"',
author:'- Duaa'},
{ quote:'"رَبِّ اجعَلني مُقيمَ الصَّلاةِ وَمِن ذُرِّيَّتي رَبَّنا وَتَقَبَّل دُعاءِ"',
author:'- -إبراهيم - 40'},

]/*array of objects of a quote and the author */
let btn =document.querySelector('#Qbtn'); /*select html element that has the id of Qbtn and assign it to the var btn */
let quote =document.querySelector(".quote");
let author =document.querySelector(".author");

/*When the button is clicked, the function specified inside the event listener will be executed.*/
btn.addEventListener('click',function(){
    let random =Math.floor(Math.random() *quotes.length);/*generating a the quotes*/
    quote.textContent = quotes[random].quote;
  author.textContent = quotes[random].author;
})
