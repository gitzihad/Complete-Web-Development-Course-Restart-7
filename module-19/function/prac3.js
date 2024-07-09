function odd_even(num1){
var f=num1%2;
return f;
}

var t=9;
var p=odd_even(t);
if(p==0){
    console.log(t," it's even")
}
else{
    console.log(t," it's odd")
}