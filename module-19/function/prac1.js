function make_ayg(array,size){
    var sum=0;
  for(var i=0; i<size; i++){
    sum+=array[i];

  }
  return sum/size;
}

const arr=[1,2,3,5,4,2,6,3];
const size= arr.length;
const avg= make_ayg(arr,size);
console.log(avg);