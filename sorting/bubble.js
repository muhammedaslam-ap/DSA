

function bubble(arr){
    let n = arr.length-1
    for(i = 0 ; i < n ; i++ ){
        for(j = 0 ; j < n - i  ; j++ ){
            if( arr[j] > arr[j+1] ){
                [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]

            }
        }
    }
    return arr
}

console.log(bubble([4,5,7,2,1,9,3,0,2,4]))