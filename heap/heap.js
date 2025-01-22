class Heap {
    constructor() {
        this.heap = [];
    }

    getparent(index) {
        return Math.floor((index - 1) / 2);
    }

    getRightChild(index) {
        return 2 * index + 2;
    }

    getLeftChild(index) {
        return 2 * index + 1;
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length-1
        while(index > 0 && this.heap[index] < this.heap[this.getparent(index)]){
            this.swap(index,this.getparent(index))
            index = this.getparent(index)
        }
    }

    heapifyDown(index = 0) {
       while(this.getLeftChild(index) < this.heap.length ){
        let smallest = this.getLeftChild(index)

        if(this.getRightChild(index) < this.heap.length && this.heap[this.getRightChild(index)] <  this.heap[smallest]){
            smallest = this.getRightChild(index)
        }

        if(this.heap[index] <= this.heap[smallest]){
            break
        }

        this.swap(index,smallest)
        index = smallest
       }
    }

    remove(value) {
        let index = this.heap.indexOf(value);

        if (index === -1) {
            console.log('Value not found');
            return;
        }

        if (index === this.heap.length - 1) {
            this.heap.pop();
            return;
        }

        const lastElement = this.heap.pop();
        this.heap[index] = lastElement;
        this.heapifyDown(index);
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
}

const MinHeap = new Heap();

MinHeap.insert(50);
MinHeap.insert(40);
MinHeap.insert(30);
MinHeap.insert(5);

console.log(MinHeap.heap); 

MinHeap.remove(40);

console.log(MinHeap.heap); 

