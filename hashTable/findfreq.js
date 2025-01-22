
let str = "mississippi"


class hashT{
    constructor(){
        this.arr = []
    }

    set(str){
        for(let i of str){
                 if(this.arr[i]){
                this.arr[i]+=1
            } else{
                this.arr[i]=1

            }
        }
    }
    
    display(){
       console.log(this.arr)
    }
}

const hash1 =new hashT()

hash1.set(str)

hash1.display()