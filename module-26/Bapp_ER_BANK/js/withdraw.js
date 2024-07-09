/*
// step 1:get event listener to the withdraw button
// 2. get the withdraw amount from the withdraw input field

// 3 get previous withdraw total
//step4:calculate total withdraw amount
// set total withdraw amount

// 5 get the previous balance total
6 calculate new balance total


step7 clear the input field
*/
document.getElementById('btn-Withdraw').addEventListener('click',function(){
    const withdrawField=document.getElementById('Withdraw-field')
    const newwithdrawAmountString=withdrawField.value

    const newwithdrawAmount=parseFloat(newwithdrawAmountString)
    // step7
    withdrawField.value=''
    if(isNaN(newwithdrawAmount)){
        alert('provide a valid number')
        return;
    }

    // step 3
    const withdrawtotalElement =document.getElementById('withdraw-total')
    const previouswithdrawtotalstring= withdrawtotalElement.innerText

    const previouswithdrawtotal=parseFloat(previouswithdrawtotalstring)


    
    // step5
    const balanceTotalElement=document.getElementById('Balance-total')
    const previousBalancetotalstring=balanceTotalElement.innerText;
    const previousBalancetotal=parseFloat(previousBalancetotalstring)
 

    if(newwithdrawAmount>previousBalancetotal){
        alert('not enough money')
        return;
    }

    
    // step4 
    const currentwithdrawtotal=previouswithdrawtotal+newwithdrawAmount;
    withdrawtotalElement.innerText=currentwithdrawtotal

    // step6
    const newBalanceTotal=previousBalancetotal-newwithdrawAmount
    balanceTotalElement.innerText=newBalanceTotal;
  

})