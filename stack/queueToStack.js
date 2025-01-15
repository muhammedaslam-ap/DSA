

class queueToStack{
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

const stack =new queueToStack()


stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)


stack.display()

stack.pop()
stack.pop()

stack.display()




