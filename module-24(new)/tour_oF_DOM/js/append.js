
// 1. where to add
const placesList=document.getElementById('places-list');

// 2. what to be added
const li=document.createElement('li');
li.innerText='pahartoli bon';

// 3. add the child
placesList.appendChild(li)


// 1.where to add
const mainContainer=document.getElementById('main-content')

// 2. what to be added
const section=document.createElement('section')
const h1=document.createElement('h1');
h1.innerText='my new h1';
section.appendChild(h1);

const ul =document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='first li';
ul.appendChild(li1)

const li2=document.createElement('li');
li2.innerText='second li';
ul.appendChild(li2);

const li3=document.createElement('li')
li3.innerText='third li';
ul.appendChild(li3);


section.appendChild(ul)


mainContainer.appendChild(section)




// set inerHTML directly 
const sectionDress=document.createElement('section');

sectionDress.innerHTML=`
    <h1>my dress section</h1>
    <ul>
        <li>pant</li>    
        <li>shirt</li>    
        <li>shocks</li>
    </ul>`

mainContainer.appendChild(sectionDress);