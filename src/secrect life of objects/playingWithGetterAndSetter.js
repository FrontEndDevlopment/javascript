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

Object.defineProperty(Object.getPrototypeOf(obj),"increaseHeight",{
    get:function(){
        this.h = this.h + this.val;
        return this.h;
    },
    set:function(val){
        this.val = val;
    }
});

obj.increaseHeight = 30;
console.log(obj.increaseHeight);
console.log(obj.height);
