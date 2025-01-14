




class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}


class doubleLinkedList{
    constructor(){
        this.head = null
    }

///////////ADD AT END///////////////
    addAtEnd(data){
        let newNode =  new Node(data)
       if(this.head == null){
          this.head = newNode
          return
       }

       let curr  = this.head

       while(curr && curr.next){
        curr = curr.next
       }

       curr.next = newNode
       newNode.prev = curr
    }


    forward(){
        let curr  = this.head
        while(curr){
            console.log(curr.data,'---->')
            curr = curr.next
        }
    }


    backward(){
        let curr = this.head

        while(curr&&curr.next){
            curr = curr.next
        }

        while(curr){
            console.log(curr.data,'---->')
            curr = curr.prev
        }
    }

//////////ADD AT FIRST////////////
    addAtFirst(data){
        let newNode = new Node(data)

        if (this.head == null) {
            this.head = newNode;
            return;
        }


            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode 
        
    }

/////////////ADD AT MIDDLE/////////////
  
    addAtMiddle(data){
        let newNode = new Node(data)

        if (this.head == null) {
            this.head = newNode;
            return;
        }

        if (this.head.next == null) {
            this.head.next = newNode;
            newNode.prev = this.head;
            return;
        }

        let f = this.head
        let s = this.head

        while(s && s.next){
            f = f.next
            s = s.next.next
        }

        newNode.prev = f.prev
        newNode.next = f

        if(f.prev){
            f.prev.next = newNode
        }

        f.prev = newNode
        
        if(f===this.head){
            this.head = newNode
        }
    }

///////////DELETE AT MIDDLE/////////
    deleteMiddle(){

        
        if(this.head == null){
            console.log('nothing to delete')
        }

        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
             slow = slow.next
             fast = fast.next.next
        }

        slow.prev.next = slow.next
        slow.next.prev = slow.prev
    }

/////////////DELETE AT FIRST/////////

    deleteAtfirst(){
        if(this.head== null){
            console.log('empty')
        }
        this.head = this.head.next
        if(this.head){
            this.head.prev = null
        }
    }


/////////DELETE AT END/////////////

    deleteAtEnd(){
        let curr = this.head

        if(this.head == null){
            console.log('no nodes have')
        }

        if(curr.next.next){
            curr = curr.next
        }

        curr.next = null
    }
}


 

let list = new doubleLinkedList


list.addAtEnd(10)
list.addAtEnd(20)
list.addAtEnd(30)
list.addAtEnd(40)

list.deleteAtfirst()
// list.deleteAtEnd()
// list.addAtFirst(100)
// list.addAtMiddle(222222222)
// list.deleteMiddle()



list.forward()
console.log('<------reverse----->')
list.backward()