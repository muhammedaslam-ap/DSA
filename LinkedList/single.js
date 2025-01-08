//////CREATING NODE////////

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head  = null
    }
    
//////////// ADD AT END////////////////////////
    addAtEnd(data){
      let  newNode = new Node(data)   
    if(this.head == null){
        this.head = newNode
        return
    }   
    let curr  = this.head 
    
    while(curr.next !== null){
        curr = curr.next
    }
    
    curr.next = newNode
}
  
/////////////ADD AT FIRST//////////////////
  addAtFirst(data){
    let  newNode = new Node(data)
     
   newNode.next = this.head
    
    this.head = newNode

  }


///////////DELETE AT END////////////////////
  deleteAtENd(){
    let curr  = this.head 
    while(curr.next.next !==null){
        curr = curr.next
    }
        curr.next = null
  }

/////////////// DELETE AT FIRST/////////////////
  deleteAtFirst(){

        this.head = this.head.next
  }
////////////DELETE MIDDLE ELEMENTS////////////////
  deleteMiddleElement(){
   
    if (this.head === null || this.head.next === null) {
      console.log("List is too short to delete a middle element.");
      return;
  }

    let firstPointer = this.head
    let secondPointer = this.head
    let previousFirstPointer

    while (secondPointer !== null && secondPointer.next !== null) {
      previousFirstPointer = firstPointer;
      firstPointer = firstPointer.next;
      secondPointer = secondPointer.next.next;
  }


    if(previousFirstPointer!==null)
      previousFirstPointer.next = firstPointer.next
    return firstPointer.data
  }



/////////////ADD AT MIDDLE/////////////////

addAtMiddle(data){
  let  newNode = new Node(data)
  let firstPointer = this.head
  let secondPointer = this.head
  let previousFirstPointer = null

  while (secondPointer !== null && secondPointer.next !== null) {
    previousFirstPointer = firstPointer;
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next.next;
}


  if(previousFirstPointer!==null){
    previousFirstPointer.next = newNode
    newNode.next = firstPointer
  
  }
   
}



//////////////FIND NODE AT DATA/////////////////////


findNoteAtData(node){
  let curr = this.head
  let count = 0 
  while(curr){
    if(count === node){
      return curr.data
    }
    count++
    curr = curr.next;
  }
}


////////////ADD AT FIND POSITION////////////


addAtFindPos(node,data){
  let newNode = new Node(data)

  if (node === 0) {
    newNode.next = this.head;
    this.head = newNode;
    return;
}

  let curr = this.head
  let count = 0 
  while(curr){
      if (count === node - 1) {
        newNode.next = curr.next;
        curr.next = newNode;
        return;
    }
    count++
    curr = curr.next;

  }
}


///////////REMOVE DUPLICATE FROM SORTED LINKEDLIST//////


removeDupSortedLnkedList(){
  let curr = this.head

  while(curr.next){
    if(curr.data==curr.next.data){
      curr.next=curr.next.next
    }
    curr = curr.next
  }
}


/////////REMOVE DUPICATE FROM LINKEDLIST////////


removeDupicate(){
  let curr = this.head

  while(curr !== null){
    let temp = curr
    while(temp.next !== null){
      if(temp.next.data===curr.data){
        temp.next =  temp.next.next
      }else{
        temp = temp.next
      }      
    }
    curr=curr.next
  }
}

////////////REVERSE LINKEDLIST ////////////


reverseLinkedlist(){
  let prev = null
  let curr = this.head

  while(curr){
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  this.head = prev
}





///////////// PRINT CONSOLE //////////////////

print(){
    let curr = this.head;
        while (curr !== null) {
            console.log(curr.data,"->");
            curr = curr.next;
        }
}

///////////DELETE NODE FROM THIS INDEX/////////////

deleteNodeFromAt(index){

  let curr = this.head
  let count = 0
  if(this.head == null){
    console.log('empty')
    return
  }
  
  while(curr.next){
    count++
    if(count == index-1){
      curr.next = curr.next.next
    }else{
      curr = curr.next
    }
  }
}

}





let list  = new LinkedList()

list.addAtEnd(50)
list.addAtEnd(0)
list.addAtEnd(10)
list.addAtEnd(20)
list.addAtEnd(20)


list.deleteNodeFromAt(3)
list.removeDupicate()
list.reverseLinkedlist()
list.addAtEnd(10)
list.addAtFirst(20)
console.log('find data',list.findNoteAtData(1))
list.addAtFindPos(2,3000)
list.removeDupSortedLnkedList()
list.deleteMiddleElement()
list.addAtMiddle(100)
list.deleteAtENd()
list.deleteAtFirst()
console.log('.....>',list.deleteMiddleElement());

list.print()



//////////////////////////////////////////////








