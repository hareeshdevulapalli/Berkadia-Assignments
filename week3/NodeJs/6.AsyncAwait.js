/*
    asyncawait can suspend a running function without blocking Node's event loop. 
    asyncawait addresses the problem of callback hell in Node.js JavaScript code. 
    async returns a promise.
    await waits until the promise has returned.
*/
function scaryClown() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('🤡');
      }, 2000);
    });
  }
  
  async function msg() {
    const msg = await scaryClown();
    console.log('Message:', msg);
  }
  
  msg(); // Message: 🤡 <-- after 2 seconds