/*
Node JS “events” module has one and only one class to handle events: EventEmitter class. It contains all required functions 
to take care of generating events.

Who is responsible to generate events in Node JS Application ?
EventEmitter class is responsible to generate events. Generating events is also known as Emitting. That’s why this class name 
is EventEmitter as it emits events in Node JS Platform.

After generating events, it places all events into Event Queue(Refer “Node JS Single Threaded Event Loop Architecture” posts 
    about the usage of Event Queue). Then Event Loop picks-up events one by one from Event Queue and process them accordingly.

Who is responsible to handle events in Node JS Application ?
Node JS Platform uses the following two components to take of events.

EventEmitter class
Java Script Callback functions
EventEmitter class is responsible to generate events and Java Script Callback functions are responsible to handle them.
*/
var events = require("events");
var fs = require('fs');
var eventsEmitter = new events.EventEmitter();

eventsEmitter.on('read',readFileContent);
eventsEmitter.on('display',displayFileContent);
eventsEmitter.on('finished',finished);
eventsEmitter.emit('read','15.SOAP_REST.txt');


function readFileContent(fileName){
    console.log("Reading " + fileName + " file started:");
    fs.readFile(fileName, 'utf8', readFile);
}

function  displayFileContent(data){
    console.log("File Data:");
    console.log(data);
    eventsEmitter.emit('finished');
}

function finished(){
  console.log("Reading and Printing File content job is done successfully.");
}

function readFile(err,data,fileName) {
    console.log("Reading " + fileName + " file done successfully.");
    eventsEmitter.emit('display',data);
}