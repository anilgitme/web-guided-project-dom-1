// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector('header')
console.log(header);
const logoTitle = document.getElementById('logoTitle')
console.log(logoTitle);
const firstCard = document.getElementsByClassName('card-title')
    // const firstCard = document.getElementsByClassName('div.card:nth-of-type(1)')

console.log(firstCard);

// B- finding within one particular element
// const imageFirstCard = document.getElementsByTagName('img')
const imageFirstCard = document.getElementsByClassName('card-img-top')
console.log(imageFirstCard);

const titleFirstCard = document.querySelector('h2.card-title')
console.log(titleFirstCard);

const subtitleFirstCard = document.getElementsByClassName('card-subtitle')
console.log(subtitleFirstCard);

const textFirstCard = document.querySelector('p.card-text')
console.log(textFirstCard);

// C- traversing with dot notation
const link1FirstCard = document.querySelector('div.card-body a:nth-of-type(1)')
console.log(link1FirstCard);
const link2FirstCard = document.querySelector('div.card-body a:nth-of-type(2)')
console.log(link2FirstCard);


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const navEles = document.querySelectorAll('nav a')
console.log(navEles);

// B- Loop over the links and console.log their text content
navEles.forEach((el) => {
    console.log(el.textContent)
})

// C- Turn the collection of links into a real array
let navItems = Array.from(navEles);
console.log(navItems);

// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeItem = navItems.filter((nav) => {
    if (nav.textContent === 'Home') {
        return nav;
    }
})
console.log(homeItem);

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
document.querySelector('h1').textContent = 'Lambda Dog'

//  B- Have the students research online the difference between textContent and innerText

/*
textContent gets the content of all elements, including
<script > and < style > elements.In contrast, innerText only 
shows“ human - readable” elements.textContent returns every element 
in the node.In contrast, innerText is aware of styling and
won 't return the text of “hidden” elements.
*/

// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
header.style.backgroundColor = 'seagreen'
const h3 = document.querySelector('h3')
h3.style.fontSize = '4rem'
h3.style.color = 'blue'
h3.style.backgroundColor = 'yellow'

//  B- Using .setAttribute to change a few attributes
const myDog = document.querySelector('img')
myDog.setAttribute('src',
    'data:image/jpeg;base64,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')
const dogTwo = document.querySelector('.card-img-top')
dogTwo.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJRvsn33ZIMdl0PgLf_7fSjY8pHxABCH67Bw&usqp=CAU'

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element

const ele = document.querySelector('h2.card-title')
ele.style.color = 'purple'


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blog = document.querySelector('nav')
const blogNav = document.createElement('a')
blogNav.textContent = 'Blog'
blog.appendChild(blogNav)



// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const card = document.querySelector('div.card')
const newCard = card.cloneNode(true)
const clonedCard = document.querySelector('div.card-group').appendChild(newCard)
console.log(clonedCard)


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]