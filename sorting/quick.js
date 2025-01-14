
function quick(arr){
    if(arr.length<=1){
        return arr
    }

    let prevot = arr[0]
    let left = []
    let rigth = []

    for(i=1;i<arr.length;i++){
        if(arr[i]<prevot){
         left.push(arr[i])
    }else{
        rigth.push(arr[i])
    }
}

return [...quick(left),prevot,...quick(rigth)]

}


console.log(quick([4,5,7,2,1,9,3,0,2,4]))