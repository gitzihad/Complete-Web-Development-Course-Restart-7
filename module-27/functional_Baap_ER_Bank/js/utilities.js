function getInputValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId)
    const inputFieldvalueString=inputField.value
    const inputFieldvalue=parseFloat(inputFieldvalueString)
    inputField.value=''
    return inputFieldvalue;
}

function getTextElementValueById(elementId){
    const textElement=document.getElementById(elementId)
    const textElementValueString=textElement.innerText;
    const textElementValue=parseFloat(textElementValueString)
    return textElementValue
}

function setTextElementValueById(elementId,newValue){
    const textElement=document.getElementById(elementId)
    textElement.innerText=newValue
}
