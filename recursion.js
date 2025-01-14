

function creatingArray(startNum,endNum){
    if(endNum<startNum){
        return []
    }else{
        let numbers = creatingArray(startNum,endNum-1)
        numbers.push(endNum)
        return numbers
    }
}

// console.log(creatingArray(0,5))





function fibRecursion(n){
    if(n<=1)return n

    return fibRecursion(n-2)+fibRecursion(n-1)
}

// console.log(fibRecursion(12))


function fac(n){
    if(n<0){
        return -1
    }
    
    if(n==1){
        return 1
    }
    return n*fac(n-1)
}

// console.log(fac(5))

function reverseString(n){
    if(n ===""){
        return ""
    }else{
        return reverseString(n.substr(1))+ n.charAt(0)
    }
}

// console.log(reverseString("hello"))


class Node{
    constructor(data){
        this.data = data 
        this.next = null
    }
}


function insertNodeAtIndex(head,pos,data,count=1){
    if(count == pos){
        let newNode = new Node(data)
        newNode.next = head.next
        head.next = newNode
        return 
    }
    if(head.next){
        return insertNodeAtIndex(head.next,pos,data,count+1) 
    }
}

let head = new Node(10)
head.next =new Node(20)
head.next.next = new Node(30)

insertNodeAtIndex(head,2,15)


let curr = head;
while (curr) {
    console.log(curr.data,'--->'); 
    curr = curr.next;
}



