


let str ='hello my name is aslam'


let stack = []
let newStr = ""

for(i=0;i<str.length;i++){
    if(str[i]==' '){
        stack.push(newStr)
        newStr = ""
    }else{
        newStr+=str[i]
    }
}

 if(newStr!==""){
    stack.push(newStr)
 }

 let word = ""
 while(stack.length){
    word += " " +stack.pop()
 }


 console.log(word)

