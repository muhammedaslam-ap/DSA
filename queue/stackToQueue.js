

class queueUsingStack{
    constructor(){
        this.stack = []
        this.stack2 = []
    }


    enqueue(data){
        this.stack.push(data)
    }

    dequeue(){
        if(this.stack.length==0){
            return "stack is empty"
        }

        while(this.stack.length){
            this.stack2.push(this.stack.pop())
        }

        this.stack2.pop()

        while(this.stack2.length){
            this.stack.push(this.stack2.pop())
        }

       
    }
    display() {
        if (this.stack.length === 0 && this.stack2.length === 0) {
            console.log("Queue is empty");
        } else {
            const queueState = [...this.stack2.reverse(), ...this.stack];
            console.log(queueState.toString());
        }
    }
}


const que = new stackToQueue()

que.enqueue(10)
que.enqueue(20)
que.enqueue(30)
que.enqueue(40)
que.enqueue(50)


que.dequeue()
que.dequeue()
que.dequeue()
que.dequeue()
que.dequeue()

que.display()