

let arr = [4,5,6,7,8,2,3,13,6,0,9,4]


function selection(arr){
    
   let n = arr.length
   for(i=0;i<n-1;i++){
    let min = i
    for(j=i+1;j<n;j++){
        if(arr[j]<arr[min]){
            min = j
        }
    }
    if(min!=i){
        [arr[i],arr[min]] = [arr[min],arr[i]]
    } 
   }
   return arr

}

console.log(selection(arr))