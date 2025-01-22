


class TreeNode{
    constructor(value){
        this.val = value
        this.left = null
        this.right = null
    }

}

class binaryTree{
    constructor(value) {
        this.root = new TreeNode(value);
    }

    insert(val){
        let newNode =new TreeNode(val)

        let queue = [this.root]

        while(queue.length){
            let temp = queue.shift()

            if(temp.left==null){
                temp.left = newNode
                return
            }else if(temp.right == null){
                temp.right = newNode
                return
            }

            if (temp.left) queue.push(temp.left);
            if (temp.right) queue.push(temp.right);
        }
        console.log(queue)
    }


    inOrder(node = this.root) {
        if (!node) return;
        this.inOrder(node.left); 
        console.log(node.val); 
        this.inOrder(node.right); 
    }

    preOrder(node = this.root) {
        if (!node) return;
        console.log(node.val); 
        this.preOrder(node.left); 
        this.preOrder(node.right); 
    }

    postOrder(node = this.root) {
        if (!node) return;
        this.postOrder(node.left); 
        this.postOrder(node.right); 
        console.log(node.val); 
    }

  
}

let Tree =new binaryTree(1)

//  Tree.insert(10)
//  Tree.insert(20)
//  Tree.insert(40)
//  Tree.insert(60)
//  Tree.insert(70)
//  Tree.insert(30)
//  Tree.insert(80)

//  console.log('inOrder-------><------inOrder')


//  Tree.inOrder()


//  console.log('preOrder-------><------preOrder')

//  Tree.preOrder()


//  console.log('postOrder-------><------postOrder')

//  Tree.postOrder()



class binarySearchTree{
    constructor(value){
        this.value = value 
        this.left = null
        this.right = null
    }
}

class  SearchTree{
    constructor(val){
        this.root = new binarySearchTree(val)
    }

    insert(val){
        let newNode = new binarySearchTree(val)

        let curr = this.root

        while(true){
            if(val<curr.value){
                if(curr.left==null){
                    curr.left = newNode
                    return
                }
                curr = curr.left
                
            }else if(val>curr.value){
                if(curr.right==null){
                    curr.right = newNode
                    return
                }
                curr = curr.right
            }else{
                return
            }

        }
    }

    contains(value){

        let curr = this.root
        while(curr){
            if(value==curr.value){
                return true
            }else if(value<curr.value){
                curr = curr.left
            }else {
                curr = curr.right
            }
        }

        return false

    }
    findMin(node) {
        while (node.left) {
            node = node.left;
        }
        return node.value;
    }



    removeElement(value, node = this.root){
        if(node == null){
            return null
        }

        if(value<node.value){
            node.left = this.removeElement(value, node.left);
        }else if(value>node.value){
            node.right = this.removeElement(value, node.right);
        }else{
            if(!node.left && !node.right){
                return null
            }

            if(!node.left){
                return node.right;
            }

            if(!node.right){
                return node.left;
            }
            const minValue = this.findMin(node.right)
            node.value = minValue
            node.right = this.removeElement(minValue, node.right);
        }
        return node
    }

    inOrder(node = this.root, result = []) {
        if (!node) return result;
        this.inOrder(node.left, result);
        result.push(node.value);
        this.inOrder(node.right, result);
        return result;
    }


    preOrder(node = this.root, result = []) {
        if (!node) return result;
        result.push(node.value);
        this.inOrder(node.left, result);
        this.inOrder(node.right, result);
        return result;
    }

    postOrder(node = this.root, result = []) {
        if (!node) return result;
        this.postOrder(node.left, result);
        this.postOrder(node.right, result);
        result.push(node.value);
        return result;
    }
}

let BINARYSEARCHTREE = new SearchTree(5)

BINARYSEARCHTREE.insert(10)
BINARYSEARCHTREE.insert(30)
BINARYSEARCHTREE.insert(50)
BINARYSEARCHTREE.insert(70)
BINARYSEARCHTREE.insert(20)


BINARYSEARCHTREE.removeElement(20)

console.log(BINARYSEARCHTREE.inOrder())
console.log(BINARYSEARCHTREE.preOrder())
console.log(BINARYSEARCHTREE.postOrder())


console.log(BINARYSEARCHTREE.contains(20))















