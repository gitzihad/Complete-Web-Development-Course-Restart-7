
var shoppingItems= ['books','sunglass','shoes','pen'];
var friendAge= [12,45,78,12,32,14];

var friendAge= {
    rahim: 12,
    samad: 45,                          
    karim:78,
    jamal:12,
    robi:32,
    kazi:14
}

var shoppingCart={
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse:1,
    pen:25,
    shoes:2
    
}


const keys= Object.keys(shoppingCart);
//console.log(keys);

const values= Object.values(shoppingCart);
// console.log(values);


for (var i=0; i<keys.length; i++){
    // console.log(keys[i]);

   var propertyName=keys[i];
    // console.log(propertyName);
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyValue);
    // console.log(propertyName,propertyValue);

    
}


// for in loop

for(var propertyName in shoppingCart){
    const value =shoppingCart[propertyName];
    console.log(value);
}


