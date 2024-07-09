var shoppingCart={
    books:3,
    sunglass:1,
    keyboard:5,
    pen:25

}

var penCount = shoppingCart.pen;

var penCount2=shoppingCart['pen'];

// keys r sahaje property gula dekha jai
var properties = Object.keys(shoppingCart);
// values r sahaje property r value gula dekha jai
var propertiesValues = Object.values(shoppingCart);

console.log(properties);
console.log(propertiesValues);