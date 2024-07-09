
    function print2largest(arr, arr_size) {
        arr.sort();
         arr.reverse();
        for (let i = 1; i < arr_size; i++) {
           
            if (arr[i] != arr[0]) {
                console.log("The second largest element is " + arr[i]);
                 return;
            }
        }
        console.log("There is no second largest element<br>");
    }
 
    let arr= [ 2,2,2,2,1 ];
    let n = arr.length;
    print2largest(arr, n);

    
