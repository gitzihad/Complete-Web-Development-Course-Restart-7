
// step1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step2 get the deposit amount from the deposit input field
    // for input field use.value to get the value inside he input field
    const depositField=document.getElementById('deposit-field')

    const newDepositAmountString=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString)
    
   

    // step3: get the current deposit total
    // for non-input(element other tha input ,textarea)use innertext to get the text
    const depositTotalElement=document.getElementById('deposit-total')
    const previousdepositTotalString=depositTotalElement.innerText;

    const previousdepositTotal = parseFloat(previousdepositTotalString)
    
    // step 4:add numbers to set the total deposit
    const currentDepositTotal=previousdepositTotal+newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText= currentDepositTotal

    // step5 : get balance current total
    const balanceTotalElement=document.getElementById('Balance-total')
    const previousBalancetotalstring=balanceTotalElement.innerText;
    const previousBalancetotal=parseFloat(previousBalancetotalstring)



    // step 6: calculate current total balance

    const currentBalanceTotal=previousBalancetotal+newDepositAmount

    // set the total balance total
    balanceTotalElement.innerText=currentBalanceTotal;

    // step7 :clear the deposit field
    depositField.value=' ';

})