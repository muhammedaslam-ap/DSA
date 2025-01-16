

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class stackLL{
    constructor(){
        this.top = null
        this.size = 0
    }

    push(data){
        let newNode = new Node(data)
        newNode.next = this.top
        this.top = newNode
        this.size++
    }

    pop(){
        if(!this.top){
            return null
        }

        this.top = this.top.next
        this.size--
    }

    peak(){
        return this.top.data
    }

    isEmpty(){
        if(this.size==0){
            return "empty"
        }
    }

    size(){
        return this.size
    }

    print() {
        let current = this.top;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(' -> '));
    }

}

let stackLL1 = new stackLL()

stackLL1.push(30)
stackLL1.push(10)
stackLL1.push(20)
stackLL1.push(50)
stackLL1.push(70)
stackLL1.push(40)


stackLL1.print()