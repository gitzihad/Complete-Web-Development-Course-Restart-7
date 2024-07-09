const phones=[

{name:'samsung',camera:12,storage:'32gb',price:3600,color:'silver'},
{name:'walton',camera:10,storage:'32gb',price:2200,color:'silver'},
{name:'iphone',camera:10,storage:'32gb',price:8200,color:'silver'},
{name:'xiaomi',camera:10,storage:'32gb',price:5200,color:'silver'},
{name:'Oppo',camera:12,storage:'32gb',price:2000,color:'silver'},
{name:'nokia',camera:12,storage:'32gb',price:4400,color:'silver'},
{name:'HTC',camera:10,storage:'32gb',price:6200,color:'silver'},
]

function cheapestPhone(phones){
    let chipest=phones[0];
    for(let i=0; i<phones.length; i++){
        const phone=phones[i];
        if(phone.price<chipest.price){
            chipest=phone;
        }
    }
    return chipest;
}

const mySelection=cheapestPhone(phones);
console.log(mySelection);