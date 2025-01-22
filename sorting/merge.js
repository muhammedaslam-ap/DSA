

function mergeSort(arr){
    if(arr.length<=1){
        return arr
       }
    
       const mid = Math.floor(arr.length/2)
    
       const left = mergeSort(arr.slice(0,mid))
       const rigth = mergeSort(arr.slice(mid))
    
       return merge(left,rigth)  
    
function merge(left,rigth){
        let sortedAray = []
        while(left.length && rigth.length){
            if(left[0]<rigth[0]){
                sortedAray.push(left.shift())
            }else{
                sortedAray.push(rigth.shift())
            }
        }
        return [...sortedAray,...left,...rigth]
    }
}

console.log(mergeSort([3,4,5,6,7,1,6,8,0,9]))