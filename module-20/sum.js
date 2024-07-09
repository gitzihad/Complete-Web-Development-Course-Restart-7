
function getArray(number){
  let sum=0;
    for (let i=0; i<number.length; i++){
        if(number[i]%2!=0){
            sum =sum+number[i];
        }
      
    }
    console.log(number);
    console.log(sum);
}




const arr=[1,4,6,8,3];
const patahw=getArray(arr);

