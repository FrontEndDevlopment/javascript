"use strict";

function RangeError(msg){
    this.message = msg;
    this.stack = (new Error()).stack;
}

RangeError.prototype = Object.create(Error.prototype);
RangeError.prototype.name = "InputError";

try{
    throw new RangeError("out of range");
}
catch(e){
    console.log(typeof e);
    if(e instanceof RangeError){
        console.log(e);
    }
    else{
        console.log("other error");
    }
}
