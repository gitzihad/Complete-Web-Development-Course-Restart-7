function remove(numbers){
  const unique=[];
    for(let i=0; i<numbers.length; i++){
        let num=numbers[i];
        if(unique.includes(num)==false){
            unique.push(num);
        }
    }
return unique;

}

const numbers=[1,5,8,3,5,9,3];
const y=remove(numbers);
console.log(y);







