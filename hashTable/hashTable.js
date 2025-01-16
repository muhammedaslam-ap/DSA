


class hashTable {
   constructor(size){
    this.table = new Array(size)
    this.size = size
   }


   hash(key){
    let hash = 0
    for( let char in key ){
        hash+=char.charCodeAt(0)
    }

    return hash % this.size
   }

   set(key,value){
    let index = this.hash(key)
    if(!this.table[index]){
        this.table[index]=[]
    } 
    
    for(let i=0;i<this.table[index].length;i++){
        if(this.table[index][i][0]==key){
            this.table[index][i][1] = value
        }
    }

    this.table[index].push([key,value])
   }


   get(key){
    const index =this.hash(key)
    if(this.table[index]){
        for(let i=0;i<this.table[index].length;i++){
            if(this.table[index][i][0]==key){
                return this.table[index][i][1]
            }
        }

    }
    return undefined
   }

   remove(key){
    const index = this.hash(key)
    if(this.table[index]){
        for(let i=0;i<this.table[index].length;i++){
            if(this.table[index][i][0]==key){
                console.log('index deleted')
                 this.table[index].splice(i,1)
            }
        }
    }
    return undefined
   }

   display(){
    for (let i = 0; i <  this.table.length ;i++){
        const backet = this.table[i]
        if(backet && backet.length>0){
            console.log(`backet ${i}:${JSON.stringify(backet)}`)
        }
    }
        
    }
  }




let hash = new hashTable(10)

hash.set('name', 'aslam');
hash.set('age', 20);
hash.set('place', 'tirur');
console.log(hash.get('name'));   


hash.display();               








