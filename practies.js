
let arr = [2,1,4,7,9,10,1,1,3,4,5,]


function reverse(n) {
    let left = 0
    let right = n.length-1
    while(left<right){
        let temp = n[left]
            n[left]=n[right]
            n[right]=temp
        
        right--
        left++
    }
    return n
}


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


function duplicate(n){
    let i =0
    while(i<n.length-1){
        if(n[i]==n[i+1]){
            n.splice(i+1,1)
        }else{
            i++
        }
    }
    return n
}

// console.log(duplicate(sort(arr)))


// let arr = [1,2,3,4,5,6,7,8,9,10]

function createSub(start , end){
    let sum = 0
    for(i=start;i<end;i++){
        sum+=arr[i]
        
    }
    return sum
}

// console.log(createSub(2,6))



let string = "hy pph nn world"

function subStringExpectVowels(string){
    let vowels = ['a,e,i,o,u']
    let arr = string.split('').trim()
    
    for(i of arr){
        
    }
}




function isPalindrome(text) {
    let cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversedText = cleanedText.split("").reverse().join("");
    return cleanedText === reversedText;
  }
  
//   console.log(isPalindrome("A man, a plan, a canal: Panama")); S
//   console.log(isPalindrome("Hello")); 
  

  function shiftAlphabet(text, n) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char.match(/[a-z]/i)) {
        let shift = n % 26;
        let base = char >= 'a' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
        let newChar = String.fromCharCode((char.charCodeAt(0) - base + shift) % 26 + base);
        result += newChar;
      } else {
        result += char;
      }
    }
    return result;
  }
  
  console.log(shiftAlphabet("Hello, World!", 3)); 
  

