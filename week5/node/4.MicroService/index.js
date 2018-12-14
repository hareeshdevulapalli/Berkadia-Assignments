//taking the random number
function randomnumber(r){
    return Math.floor(Math.random()*r);
}
//exporting microservice:head or tail.
module.exports=(req,res)=>{
    const coin = (randomnumber(1000)%2) ? 'heads':'tails';
    return{
        data:coin
    };
}


//Implementation:
/*

PS C:\Users\user\Desktop\Berkadia-Assignments\week5\node\4.MicroService> npm start

> 4.microservice@1.0.0 start C:\Users\user\Desktop\Berkadia-Assignments\week5\node\4.MicroService
> micro

micro: Accepting connections on port 3000

*/
