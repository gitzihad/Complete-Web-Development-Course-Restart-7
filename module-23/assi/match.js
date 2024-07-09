const numbers = [45, 65, 23, 98, 19];
// for(let i=0; i<numbers.length; i++){
//     const number=numbers[i];
//     cons
// }


// for(const number of numbers){
//     console.log(number)
// }


const products = [
    { id: 1, name: 'xiami phone one night', price: 19000 },
    { id: 2, name: 'iphone', price: 19000 },
    { id: 3, name: 'mac book air', price: 19000 },
    { id: 4, name: 'lenovo laptop', price: 19000 },
    { id: 5, name: 'dell inspiron laptop', price: 19000 },
    { id: 6, name: 'samsung phone note7', price: 19000 },
    { id: 7, name: 'nokia old age phone gone', price: 19000 },
    { id: 8, name: 'phone one', price: 19000 },
]

// for (const product of products){
//     console.log(product)
// } 

function matchProducts(products, search) {
    const matched=[];
    for (const product of products) {
        
        if(product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched;
}

const result=matchProducts(products,'phone');
console.log(result);