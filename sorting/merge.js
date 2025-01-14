

function merge(arr){
    if(arr.length<=1){
        return arr
    }

    let mid = Math.floor(arr.length/2)

    let left = merge( arr.slice(0,mid))
    let right = merge(arr.slice(mid))

    return merging(left,right)
}

function merging(left,right){
    let sortedArray = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }

    return [...sortedArray,...left,...right]
}

console.log(merge([3,4,5,6,7,1,6,8,0,9]))