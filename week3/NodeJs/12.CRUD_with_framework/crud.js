const express = require('express');
var fs = require('fs');
const crud = express();
crud.use(express.json());
crud.get('/',(req,res) => {
    res.send("<html><body><h1>CRUD with Frameworks</h1></body></html>");
});
crud.get('/display/:filename',(req,res) => {
    let a=req.params.filename;
    let contents = fs.readFileSync(a, 'utf8');
    res.send("<html><body><h1>Displaying contents of file<br></h1></body></html>"+contents);
});
crud.post('/create/:newfile',(req,res) => {
    let filename=req.params.newfile;
    res.send("File created succesfully with filename:"+filename);
});
crud.post('/insert/:filename/:data',(req,res) => {
    let fname=req.params.filename;
    let d=req.params.data;
    fs.appendFile(fname, d, function(err, data){
        if (err) console.log(err);
            console.log("File content is Appended Successfully through post operation \n");
    });
    res.send("Inserted data into file:"+fname+" is:"+d);
});
crud.put('/replace/:filename/:filedata',(req,res) => {
    let fname=req.params.filename;
    let data=req.params.filedata;
    fs.writeFileSync(fname, data, function(err, data){
        if (err) console.log(err);
            console.log("File content is Appended Successfully through post operation \n");
    });
    res.send("Replced data of a file:"+fname+" is :"+ data);
});
crud.delete('/delete/:filename',(req,res)=>{
	let filename=req.params.filename;	
    fs.unlink(filename, function (err) {
        if (err) console.log("File not found");
        // if no error, file has been deleted successfully
        console.log('File deleted!');
    }); 
    res.send("File content is  Successfully deleted,filename:"+filename);

});
crud.listen(7777,() => console.log("Listening on port 7777"));