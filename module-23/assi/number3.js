function getmax(arr){
    let num1=arr[0];
   
   let num2=arr[1];
   if(num1<0 || num2<0){
    return "invaild";
   }
   if(num1==num2){
       return "equal";
   }
  
   if(num1>num2){
       let p=[num1,num2];
       return p;
   }
   if(num1<num2){
   let u=[num2,num1];
   return u;
   }
  
   }
   
   const array=[43,5];
   const result=getmax(array);
   console.log(result);