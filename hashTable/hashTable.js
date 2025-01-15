


class hashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let hash = 0;
        for (let char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }

        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value;
                return;
            }
        }

        this.table[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1];
                }
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        if (!this.table[index]) {
            console.log("Table is empty");
            return;
        }

        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index].splice(i, 1);
                console.log(`Removed ${key}`);
                return;
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            const bucket = this.table[i];
            if (bucket && bucket.length > 0) {
                console.log(`Bucket ${i}: ${JSON.stringify(bucket)}`);
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








