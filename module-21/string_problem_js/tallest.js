
function tallest(numbers){
    let largest=numbers[0];
    for (let i=0; i<numbers. length; i++){
    const index=i;
    const element=numbers[index];
    if(element>largest)
        largest=element;
    }
    return largest;

 }
    









const l=[4,6,8,9,24];
const y=tallest(l);
console.log(y);