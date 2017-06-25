var obj = {
    h : 10,
    get height(){
        return this.h;
    },
    set height(val){
        this.h = val;
    }
}

console.log(obj.height);
obj.height = 20;
console.log(obj.height);