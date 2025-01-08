

function sort(n){
    let swaped = true
    while(swaped){
        swaped = false
        for(let i=0;i<n.length-1; i++){
            if(n[i]>n[i+1]){
            let temp = n[i]
                n[i] = n[i+1]
                n[i+1] = temp
                swaped=true
            }
        }
    }
    return n
}



let arr = [12,3,4,5,6,3]

function binarySearch(nums,target){
    let start = 0
    let end = nums.length-1

    while(start <= end){

        let middle = Math.floor((start+end)/2)

        if(nums[middle]===target){
            return middle
        }

        if(nums[middle]<target){
            start = middle+1
        }else{
            end = middle-1
        }
    }

    return -1
}

// console.log(binarySearch(sort(arr),4))


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1; 
}

console.log(linearSearch(arr,4))

