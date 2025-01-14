


function insertion(...arr){
    let n = arr.length
    for(let i=1 ; i<n ;i++){
        const key = arr[i]
        let j = i-1
        while(j>=0 && arr[j] > key){
            arr[j + 1] = arr[j] 
            j--
        }
        arr[j + 1] = key
    }
    return arr
}

console.log(insertion(5,4,1,9,8,4,3,7,4,3,2,4,6))