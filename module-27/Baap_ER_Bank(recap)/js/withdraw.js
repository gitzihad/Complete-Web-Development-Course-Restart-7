/*
 1. add event listener to the withdraw button
 2. get withdraw amount from the withdraw input field
2.5  convert string to float number
3. clear the withdraw input field after getting hte value
    4. get the previous withdraw total

5 calculate new withdraw total and set the value to the withdraw total

6. get previous balance
7. calculate the new balance and set it to the balance total element

*/

document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step2 
    const withdrawField=document.getElementById('withdraw-field')
    const newWithdrawAmountString=withdrawField.value
    const newWithdrawAmount=parseFloat(newWithdrawAmountString)

    // step3
    withdrawField.value=''

    // step 4
    const withdrawTotalElement=document.getElementById('withdraw-total')
    const previousWithdrawTotalString=withdrawTotalElement.innerText
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString)

    // step5 
    const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmount

    withdrawTotalElement.innerText=newWithdrawTotal

    // step6
    const balanceElement=document.getElementById('balance-total')
    const previousBalanceTotalString=balanceElement.innerText
    const previousBalanceTotal=parseFloat(previousBalanceTotalString)


    // step7
    const newBalanceTotal=previousBalanceTotal-newWithdrawAmount

    balanceElement.innerText=newBalanceTotal
    


})