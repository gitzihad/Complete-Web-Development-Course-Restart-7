function foo(){
    console.log("print foo");

    function bar(){
        console.log("print var");
    }
    
}


var po=foo();
console.log(po);
var to=bar();
console.log(to);
