

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null 
//     }
// }

let arr =[1,2,3,4,5,6,7,8,9,10]

// function arrayToLinkedlist(arr){
     
//     if(arr.length == 0){
//         console.log('array is empty')
//         return null
//     }


//     let head = new Node(arr[0])
//     let curr = head

//     for(i=0;i<arr.length;i++){

//         curr.next = new Node(arr[i])
//         curr = curr.next
//     }

//     return head

// }


// function linkedlistTOArray(head){
//     let curr = this.head
//     let arr = []

//     while(curr){
//         arr.push(curr.data)
//         curr = curr.next
//     }

//     return arr
// }

// function createLinkedlist(arr){
//     if(arr.length===0){
//         return null
//     }

//     let head = new Node(data)
//     curr = head

//     for(i=0;i<arr.length;i++){
//         curr.next = new Node(data)
//         curr = curr.next
//     }
//     return head
// }


//  function print(head){
//     let curr = head
//     while (curr !== null) {
//         // console.log(`${curr.data} -> `);
//         curr = curr.next;
//     }
//  }

//  const linkedList = createLinkedlist([1, 2, 3, 4, 5]);
//  const array = linkedlistTOArray(linkedList)
// //  console.log(array)


//  const linkedlist = arrayToLinkedlist(arr)
//  print(linkedlist)



 function createSub(start, end) {
    let sum = 0;
    for (let i = start; i < end; i++) {
        sum += arr[i];
    }
    return sum;
}


// console.log(createSub(2, 6)); 

let left = 0;
let right = arr.length - 1;

while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
}

console.log("Reversed array:", arr.join(" "));
