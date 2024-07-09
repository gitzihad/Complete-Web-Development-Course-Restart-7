 
//  step1 :add click event handler with the submit button  
 document.getElementById('btn-submit').addEventListener('click',function(){
    // step 2 :get the mail address from the table
    // always remember to use .value to get text from an input fiels
    const emailField=document.getElementById('user-email')
    const email=emailField.value;
    

    // step3 get password
     
    const PasswordField=document.getElementById('user-password')
    const password=PasswordField.value;
    console.log(email,password)

    //Danger: do not verify email password on  the client side

    // step4 verify  email and password

    if(email=='sontan@bapp.com' && password=='secret'){
        window.location.href='bank.html'
    }
    else{
        alert('invalid user')
    }



 })