// console.log("append js")
//1 where to add
const placesList=document.getElementById('places-list');
//2 what to be added
const li=document.createElement('li');
li.innerText='paratoli bon';

// 3 add the child
placesList.appendChild(li)

// 1. where to add
const mainContainer=document.getElementById('main-container');

// 2.what to be added
const section=document.createElement('section');
const h1=document.createElement('h1');
h1.innerText='My Food List';
section.appendChild(h1);


const ul=document.createElement('ul');
const li1=document.createElement('li');
li.innerText='biriyani';
ul.appendChild(li1);

const li2=document.createElement('li');
li.innerText='borhani';
ul.appendChild(li2);

const li3=document.createElement('li');
li.innerText='salad';
ul.appendChild(li3);


section.appendChild(ul);
mainContainer.appendChild(section);
 


// set innerHTml 

const sectionDress =document.createElement('section');
sectionDress.innerHTML= `

<h1>My Dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>lungi</li>
    <li>santo ganji</li>

 </ul>   
`

mainContainer.appendChild(sectionDress);








