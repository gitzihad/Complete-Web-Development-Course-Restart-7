function cubeNumber(number){
    if(number>=0){
        let r=number*number*number;
        return r;
    }
    else{
        return "give a real value";
    }
  
}

const num=4;
const yu=cubeNumber(num);
console.log(yu);