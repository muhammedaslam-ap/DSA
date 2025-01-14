

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}


class LinkedLists{
    constructor() {
        this.head = null
    }


    addAtFrist(data){
        let newNode = new Node(data)

        newNode.next = this.head
        this.head = newNode
    }

    print(){

        let curr = this.head

        while(curr){
            if(curr.data%2===0){
                console.log(curr.data)
            }
            curr = curr.next
        }
    }
}


let lists = new LinkedLists()

lists.addAtFrist(1)
lists.addAtFrist(2)
lists.addAtFrist(3)
lists.addAtFrist(4)
lists.addAtFrist(5)
lists.addAtFrist(6)
lists.addAtFrist(7)


lists.print()