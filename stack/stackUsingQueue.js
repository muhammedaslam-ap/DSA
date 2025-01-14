

class stackUsingQueue{
    constructor(){
        this.queue1 = []
        this.queue2 = []
    }


    push(data){
        this.queue1.push(data)
    }

    pop(){
        if(this.queue1.length===0){
            return "queue is empty"
        }

        while(this.queue1.length>1){
            this.queue2.push(this.queue1.shift())
        }

        let promptelement = this.queue1.shift()


        while(this.queue2.length){
            this.queue1.push(this.queue2.shift())
        }

        return promptelement
    }

    display(){
       if(this.queue1){
        console.log(this.queue1);
       }
        
    }


}

const q =new stackUsingQueue()


q.push(10)
q.push(20)
q.push(30)
q.push(40)
q.push(50)


q.display()

q.pop()
q.pop()

q.display()




