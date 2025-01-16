

class stackUsingQueue{
   constructor(){
    this.stack1 = []
    this.stack2 = []
   }

   push(data){
    this.stack1.push(data)
   }


   pop(){   
    if(this.stack1==0){
        return []
    }

    while(this.stack1.length){
        this.stack2.push(this.stack1.shift())
    }

    let element = this.stack2.shift()

    while(this.stack2.length){
        this.stack1.push(this.stack2.shift())
    }
    return element
   }


   display(){
    if(this.stack1.length>0){     
            console.log(this.stack1)      
    }else{
        console.warn('stack is empty')
    }
   }

}

const stack =new stackUsingQueue()


stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)


stack.display()

stack.pop()
stack.pop()
stack.pop()
stack.pop()


stack.display()




