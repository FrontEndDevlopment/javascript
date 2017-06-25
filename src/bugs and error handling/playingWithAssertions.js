"use strict";

function AssertionFailed(msg){
    this.message = msg;
    this.stack = (new Error()).stack;
}

AssertionFailed.prototype = Object.create(Error.prototype);

function Assert(){

}
Assert.prototype.ok = function(test,msg){
    if(!test)
    throw new AssertionFailed(msg);
    console.log("assertion pass!!!!");
}

var assert = new Assert();

try{
    var test = false;
    assert.ok(test,"value is false");
}
catch(e){
    if(e instanceof AssertionFailed){
        console.log("assertion failed!!!");
        console.log(e);
    }
    else{
        console.log("other error");
    }
}