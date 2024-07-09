function calculateTriangleArea(){
    // get trainagle base value
    const baseField=document.getElementById('triangle-base')
    const baseValeText=baseField.value
    const base=parseFloat(baseValeText)
    console.log(base)


    // get triangle height value
    const heightField=document.getElementById('triangle-height')
    const heightValeText=heightField.value
    const height=parseFloat(heightValeText)
    console.log(height)


    const area = 0.5*base*height
    console.log(area)



    // show triangle area
    const areaSpan=document.getElementById('triangle-area')
    areaSpan.innerText=area

    addTCalculationEntry('Triangle',area)

}


function calculateRectangleArea(){
       // get rectangle width value
       const widthField=document.getElementById('rectangle-width')
       const widthValeText=widthField.value
       const width=parseFloat(widthValeText)
       console.log(width)


          // get rectangle length value
    const lengthField=document.getElementById('rectangle-length')
    const lengthValeText=lengthField.value
    const length=parseFloat(lengthValeText)
    console.log(length)


    // validate input: width and length
    if(isNaN(width) || isNaN(length) ){
        alert('Please insert a number')
        return;
    }

    
    const area = width*length
    console.log(area)



    // show triangle area
    const areaSpan=document.getElementById('rectangle-area')
    areaSpan.innerText=area


    addTCalculationEntry('Rectangle',area)
}


// reusable function --> reduce duplicate code
function calculateparallelogramArea(){
    const base=getInputValue('parallelogram-base')
    console.log(base)

    const height=getInputValue('parallelogram-height')
    console.log(height)

    // validate 
    if(isNaN(base)||isNaN(height)){
        alert('Please insert a number')
        return;
    }

    const area=base*height
    setElementInnerText('parallelogram-area',area)

    // add to calculation entry
    addTCalculationEntry('parallelogram',area)

}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius=getInputValue('ellipse-minor-radius');
    
    const area= 3.14*majorRadius*minorRadius
    const areaTwoDecimal=area.toFixed(2)
    setElementInnerText('ellipse-area',areaTwoDecimal)


    addTCalculationEntry('Ellipse',areaTwoDecimal)
}


// reusable get input value field in number
function getInputValue(fieldId){
    const inputField= document.getElementById(fieldId)
    const inputVAlueText=inputField.value
    const value=parseFloat(inputVAlueText)
    return value
}


// reusable set span,p,div, etc text
function setElementInnerText(elementId,area){
    const element=document.getElementById(elementId)
    element.innerText=area
}

// add to calculation entry
/*
    1. get the element where you want to add the dynamic HTML
    2. create a element you want to add
    3. if needed add some class
    4. set inner html.it could be dynamic template string
    5.append the created element as a child of the parent

*/
function addTCalculationEntry(areaType,area){
    console.log(areaType+ ' '+area)
    const calculationEntry=document.getElementById('calculation-entry')

    const count=calculationEntry.childElementCount

    const p=document.createElement('p')
    p.classList.add('my-4')
    p.innerHTML=`${count+1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p)



}


// Data Validation
/****
 * 
 * 1. set the proper type of the input field(number,data,email)
 * 2.check type using typeof
 * 3. NaN means : Not a number. isNaN is checking whether the input is not a number or not
 * 
 * 
 */