


class queue{
    constructor(){
        this.items = []
    }


    enqueue(element){
        this.items.push(element)
    }


    dequeue(){
       return this.items.shift()
    }

    isEmpty(){
        return this.items.length===0
    }

    peak(){
        if(!this.isEmpty()){
            return this.items[0]
        }

        return null
    }


    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString())
    }
}


let Queue = new queue()

// Queue.enqueue(10)
// Queue.enqueue(20)
// Queue.enqueue(40)
// Queue.dequeue()
// Queue.dequeue()

// console.log(Queue.size())
// console.log(Queue.peak())


// Queue.print()

// console.log(Queue.isEmpty())



class QueueObj{
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        
        let item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    
 
    isEmpty(){
        return this.rear - this.front == 0 
    }

    peak(){
        return this.items[this.front]
    }

    size(){
        return this.rear - this.front
    }

    print(){
        console.log(this.items)
    }
}


let queueObj = new QueueObj()


// queueObj.enqueue(10)
// queueObj.enqueue(20)
// queueObj.enqueue(30)
// queueObj.enqueue(40)

// console.log(queueObj.dequeue())
// console.log(queueObj.dequeue())
// console.log(queueObj.peak())

// console.log(queueObj.size())

// console.log(queueObj.isEmpty())


// queueObj.print()

 

class NOde{
    constructor(data){
        this.data = data
        this.next = null
    }
}


class queueUsingLL{
    constructor(){
        this.rear = null
        this.front =null
    }


    enqueue(data){
        let newNode  = new NOde(data)

        if(this.rear ==null){
            this.front = this.rear =newNode
        }else{
            this.rear.next = newNode
            this.rear = newNode

        }
    }

    dequeue(){
        if(this.front==null){
            return "queue is empty"
        }

        this.front = this.front.next

        if(this.front==null){
            this.rear=null
        }

        return
    }
    display() {
        if (!this.front) { 
            console.log("Queue is empty");
            return;
        }
    
        let current = this.front;
        const result = [];
        while (current) { // Traverse until the end of the queue
            result.push(current.data); // Collect the data
            current = current.next; // Move to the next node
        }
        console.log("Queue elements:", result.join(" -> "));
    }
}


const queueLL = new queueUsingLL()

queueLL.enqueue(10)
queueLL.enqueue(30)
queueLL.enqueue(20)
queueLL.enqueue(40)
queueLL.enqueue(50)
queueLL.enqueue(80)

queueLL.dequeue()

queueLL.display()



