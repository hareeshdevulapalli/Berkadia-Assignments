/*
    setTimeout() : This object is created internally and is returned from setTimeout() and setInterval().setTimeout() can 
be used to schedule code execution after a designated amount of milliseconds. This function is similar to window.setTimeout() from 
the browser JavaScript API, however a string of code cannot be passed to be executed.setTimeout() accepts a function to 
execute as its first argument and the millisecond delay defined as a number as the second argument. Additional arguments 
may also be included and these will be passed on to the function.
    setInterval() : It keeps on execute for given time.
    setImmediate() : It executes after IO callbacks.

*/

// A timeout
setTimeout(function() {  
    console.log('I am a timeout');
}, 5000);

// An interval
setInterval(function() {  
    console.log('I am an interval');
}, 5000);

// An immediate, its callback will be executed before those defined above
setImmediate(function() {  
    console.log('I am an immediate');
});

// IO callbacks and code in the normal event loop runs before the timers
console.log('I am a normal statement in the event loop'); 


Implementation:

PS C:\Users\user\desktop\Berkadia-assignments\week3\nodejs> node 3.SET-methods.js
I am a normal statement in the event loop
I am an immediate
I am a timeout
I am an interval
I am an interval
I am an interval
I am an interval
I am an interval
I am an interval
I am an interval
I am an interval