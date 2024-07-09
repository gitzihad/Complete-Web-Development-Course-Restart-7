console.log('this is separate js')
// option 1
//  <button onclick="console.log(65)">Another Button</button> 

// option 2 in oneClick function on the HTML element

// IMPORTANT: we will use this
//<button onclick="makeRed()">make red</button>

function makeRed() {
    document.body.style.backgroundColor = 'red'
}


// option 3 in oneClick function
const makeBlueButton = document.getElementById('make-blue')
makeBlueButton.onclick = makeblue;

function makeblue() {
    document.body.style.backgroundColor = 'blue';
}


// option 3 another
const purplebutton =document.getElementById('make-purple')
purplebutton.onclick=function makepurple(){
   document.body.style.backgroundColor='purple'
}



// option 4
const pinkButton=document.getElementById('make-pink')
pinkButton.addEventListener('click',makepink)

function makepink(){
    document.body.style.backgroundColor='pink'
}


//option 4 another

const makeGreenButton=document.getElementById('make-green')
makeGreenButton.addEventListener('click',function makegreen()
{
  document.body.style.backgroundColor='green'
}

)


// option 4 final

document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor='goldenrod'
})