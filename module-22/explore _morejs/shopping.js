const shoppingCart=[
    {name:'shirt',price:1200,quantity:3},
    {name:'pant',price:2000,quantity:3},
    {name:'shoe',price:1500,quantity:3},
    {name:'belt',price:900,quantity:3}
];

function totalcost(products){
    let sum=0;
    for(let i=0; i<products.length; i++){
        // const pro=products[i];
        sum=sum+products[i].price;
        // console.log(product);
    }
    return sum;
}


const expense=totalcost(shoppingCart);
console.log("total cost: "+expense);
