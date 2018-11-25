function callbackhell() {
    setTimeout(function() {
      console.log('first function');
      setTimeout(function() {
        console.log('second function');
          setTimeout(function() {
           console.log('third function');
              setTimeout(function() {
              console.log('fourth function');
    }, 2000);
   }, 2000);
 }, 2000);
}, 2000);
  };
callbackhell();

Execution:

PS C:\Users\user\desktop\node\week2\nodejs> node callbackhell
first function
second function
third function
fourth function
