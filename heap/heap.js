

class Heap{
    constructor(){
        this.heap = []
    }


    getparent(index){
        return Math.floor((index-1)/2)
    }

    getLeftChild(index){
        return 2 * index +1
    }


    getRightChild(index){
        return 2 * index +2
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length-1
        while(index > 0 && this.heap[index] > this.heap[this.getparent(index)]){
            this.swap(index,this.getparent(index))
            index = this.getparent(index)
        }
    }

    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]

    }

    heapifyDown(index = 0){
        while(this.getLeftChild(index)<this.heap.length){
            let largest  = this.getLeftChild(index)

            if(this.getRightChild(index)<this.heap.length &&  this.heap[this.getRightChild(index)] > this.heap[largest]){
                largest = this.getRightChild(index)
            }

            if(this.heap[index] >= this.heap[largest]){
                break
            }

            this.swap(index,largest)
            index = largest
        }
    }

    remove(value){
        let index = this.heap.indexOf(value)

        if(value!==this.heap[index]){
            console.log('value not found in tree')
            return
        }

        if(index == this.heap.length-1){
            this.heap.pop()
            return
        }


        let lastElement = this.heap.pop()
        this.heap[index] = lastElement
        this.heapifyDown(index)
    }

    

}


const MaxHeap = new Heap()


MaxHeap.insert(10)
MaxHeap.insert(50)
MaxHeap.insert(5)
MaxHeap.insert(10)
MaxHeap.insert(30)
MaxHeap.insert(40)
MaxHeap.insert(70)
MaxHeap.insert(40)
MaxHeap.insert(80)


MaxHeap.remove(80)
MaxHeap.remove(70)
MaxHeap.remove(5)

console.log(MaxHeap.heap)
