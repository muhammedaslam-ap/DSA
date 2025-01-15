

class Stack{
    constructor(){
        this.stack = []
        this.stack2 = []
    }


    push(element){
        this.stack.push(element)
    }


    pop(){
        if(this.isEmpty()){
            console.log('stack is empty')
        }
        
       return  this.stack.pop()
    }

    isEmpty(){
        return this.stack.length === 0
    }

    findMiddle(){
        if(this.isEmpty()){
            console.log('stack is empty')
        }
        return this.stack[Math.floor(this.stack.length/2)]
    }


    removeMiddle(){
        if(this.isEmpty()){
            console.log('stack is empty')
            return
        }

        let mid = Math.floor(this.stack.length/2)

        for(let i = this.stack.length-1;i>mid;i--){
            
            this.stack2.push(this.stack.pop())
        }

        this.stack.pop()

        while(this.stack2.length>0){
            this.stack.push(this.stack2.pop())
        }
    }

    peak(){
        return console.log('Now peak of the stack element is',this.stack[this.stack.length-1])
    }


    size(){
        return console.log('size of the stack is:',this.stack.length)
    }
    sort() {
        while (this.stack.length) {
            let temp = this.stack.pop();
            while (this.stack2.length && this.stack2[this.stack2.length - 1] > temp) {
                this.stack.push(this.stack2.pop());

                this.print()
            }
            this.stack2.push();
        }
        while (this.stack2.length) {
            this.stack.push(this.stack2.pop());
        }
        return this.stack;
    }
    // sorting using recursion
    sortStack(stack = this.stack) {
        if (stack.length == 0) {
            return
        }
        const temp = stack.pop()
        this.sortStack(stack)
        this.insertElementInOrder(stack, temp)
    }
    insertElementInOrder(stack, elementToInsert) {
        if (stack.length == 0 || stack[stack.length - 1] < elementToInsert) {
            stack.push(elementToInsert)
            return
        }
        const temp = stack.pop()
        this.insertElementInOrder(stack, elementToInsert)
        stack.push(temp)
    }

    //  reversing using recursion
    reverseStackUsingRecursion(stack = this.stack) {
        if (stack.length == 0) {
            return
        }
        const temp = stack.pop()
        this.reverseStackUsingRecursion(stack)
        this.insertElement(stack, temp)
    } 

    insertElement(stack, elementToInsert) {
        if (stack.length == 0) {
            stack.push(elementToInsert)
            return
        }
        const temp = stack.pop()
        this.insertElement(stack, elementToInsert)
        stack.push(temp)
    }
//https://www.youtube.com/watch?v=K0XXVSL4wUo    for sorting 
    print(){
        console.log(this.stack)
    }
}






let stack = new Stack()

stack.push(3)
stack.push(1)
stack.push(5)
stack.push(4)
stack.push(2)
stack.sortStack()

stack.print()

stack.reverseStackUsingRecursion()

stack.print()
