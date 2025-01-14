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
      let newNode = new Node(data)

      if(this.head===null){
        this.head = newNode
        return
      }

       let curr = this.head

       while(curr.next){
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
   if(this.head == null){
    console.log('there is no node have .to delete')
    return
   }

   if(this.head.next ==null){
    this.head = null
    return
   }


   let curr  = this.head
   while( curr.next && curr.next.next){
       curr = curr.next
   }
   curr.next = null
  }

/////////////// DELETE AT FIRST/////////////////
  deleteAtFirst(){
    if(this.head == null){
      console.log('there is no node have to delete')
      return
    }
        this.head = this.head.next

  }
////////////DELETE MIDDLE ELEMENTS////////////////
  deleteMiddleElement(){
   
   if(this.next == null || this.head.next == null){
    console.log('its very short so cant find middel element')
   }

   let slow = this.head
   let fast = this.head
   let prev = null
   while(fast && fast.next){
      prev = slow
      slow = slow.next
      fast = fast.next.next
   }

   return prev.next = slow.next
   
  }



/////////////ADD AT MIDDLE/////////////////

addAtMiddle(data){
 
  if(this.head == null){
    console.log('no node in linkedlist')
    return
  }

  let slow = this.head
  let fast = this.head
  let prev = null
  while(fast && fast.next){
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }
  let newNode = new Node(data)

  newNode.next = prev.next
  prev.next = newNode   
   
}



//////////////FIND NODE AT DATA/////////////////////


findNoteAtData(node){

  if(this.head == null){
    console.log('linked list is empty')
    return
  }

  let curr = this.head
  let count = 0 
  if(node == 0){
    return this.head.data
  }
  
  while(curr){
    if(count === node-1){
       return curr.data
    }
    count++
    curr = curr.next
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
  if(this.head ==  null){
    console.log('there is no node have to delete')
  }

  let curr =this.head

  while(curr && curr.next){
    if(curr.data == curr.next.data){
      curr.next = curr.next.next
    }else{
      curr = curr.next
    }
  }
}


/////////REMOVE DUPICATE FROM LINKEDLIST////////


removeDupicate(){

  if(this.head ==  null){
    console.log('linkedlist is empty')
    return
  }

  let curr = this.head
  while(curr){
    let temp = curr 
    while(temp.next){
      if(curr.data === temp.next.data){
        temp.next = temp.next.next
      }else{
        temp = temp.next
      }
    }
    curr = curr.next
  }

}

////////////REVERSE LINKEDLIST ////////////


reverseLinkedlist(){
  let prev = null
  let curr = this.head

  while(curr && curr.next){
    let next  = curr.next
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
list.addAtEnd(20)
list.addAtEnd(20)
list.addAtEnd(20)
list.addAtEnd(10)
list.addAtEnd(10)
list.addAtEnd(10)
list.addAtEnd(20)
list.addAtEnd(20)
list.addAtEnd(20)



// list.deleteNodeFromAt(3)
// list.removeDupicate()
// list.reverseLinkedlist()
// list.addAtEnd(10)
// list.addAtFirst(20)
// console.log('find data',list.findNoteAtData(9))
// list.addAtFindPos(2,3000)
// list.removeDupSortedLnkedList()
// list.deleteMiddleElement()
// list.addAtMiddle(100)
// list.deleteAtENd()
// list.deleteAtFirst()
// console.log('.....>',list.deleteMiddleElement());

list.print()



//////////////////////////////////////////////








