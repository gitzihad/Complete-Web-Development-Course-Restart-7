/*
 1. add event listener to the deposit button
 2. get deposit amount from the deposit input field
2.5  convert string to float number
3. clear the deposit input field after getting hte value
    4. get the previous deposit total

5 calculate new deposit total and set the value to the deposit total

6. get current balance
7. calculate the new balance and set it to the balance total element

*/

// step1:
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step 2
  const depositField=document.getElementById('deposit-field')
  const newDepositAmountString=depositField.value;
  const newDepositAmount=parseFloat(newDepositAmountString)


//   step3 
    depositField.value=''

    // step4:
    const depositTotalElement= document.getElementById('deposit-total')
    const previousDepositTotalString=depositTotalElement.innerText
    const previousDepositTotal=parseFloat(previousDepositTotalString)

    // step5
    const newDepositTotal=previousDepositTotal+newDepositAmount
    depositTotalElement.innerText=newDepositTotal


// step 6
    const balanceTotalElement=document.getElementById('balance-total')
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotalAmount=parseFloat(previousBalanceTotalString)

    // step 7
    const newBalanceTotal=previousBalanceTotalAmount+newDepositAmount

    balanceTotalElement.innerText=newBalanceTotal
})