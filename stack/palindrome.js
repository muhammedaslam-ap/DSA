
let str ="aslam"
function palindrome(str){
    let arr = []
    for(let i of str ){
        arr.push(i)
    }
    let reverse = ""
    while(arr.length>0){
        reverse+=arr.pop()
    }

    return str == reverse
}

console.log(palindrome(str))