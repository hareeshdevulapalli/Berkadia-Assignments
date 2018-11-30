var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var Stringbuilder = require('stringbuilder');
function homepage(req,res){
    var hb= new Stringbuilder({ newline : '\r\n'});
    hb.appendLine("<html>");
    hb.appendLine("     <head>");
    hb.appendLine("         <title>homepage</title>");
    hb.appendLine("     </head>");
    hb.appendLine("     <body>");
    hb.appendLine("         <h1>This is an HOMEPAGE</h1>");
    hb.appendLine("     </body>");
    hb.appendLine("</html>");
    hb.build((err,result) => {
        res.writeHead(200,{ "content-Type" : "text/html"});
        res.write(result);
        res.end();
    });
}
function createfile(req,res,data){
        var cb= new Stringbuilder({ newline : '\r\n'});
        cb.appendLine("<html>");
        cb.appendLine("     <head>");
        cb.appendLine("         <title>creation of file</title>");
        cb.appendLine("     </head>");
        cb.appendLine("     <body>");
        cb.appendLine("         <form method='POST'>");
        cb.appendLine("             <table>");
        cb.appendLine("                 <tr>");
        cb.appendLine("                     <td>Enter the text into the file</td>");
        cb.appendLine("                     <td><input type='text' id='filedata' name='data' value=''></input></td>");
        cb.appendLine("                 </tr>");
        cb.appendLine("                 <tr>");
        cb.appendLine("                     <td><input type='submit' value='inserting data'></input></td>");
        cb.appendLine("                 </tr>");
        cb.appendLine("             </table>");
        cb.appendLine("         </form>");
        cb.appendLine("     </body>");
        cb.appendLine("</html>");
        cb.build((err,result) => {
            res.writeHead(200,{ "content-Type" : 'text/html'});
            res.write(result);
            res.end();
        });
}
function display(req,res){
    res.writeHead(200,{ "content-Type" : 'text/html'});
    res.write("<html><body><h1>Reading file</h1>goto HOMEPAGE:click <a href='/'>here</a></body></html>");
    res.write("Reading to a file",fs.readFile('file.txt', 'utf-8', function(err, data){
        if (err) console.log(err);
        console.log("File read successfully.");
        console.log(data);
    }));
    res.end();  
}
function replacefile(req,res){
    res.writeHead(200,{ "content-Type" : 'text/html'});
    res.write("<html><body><h1>Replacing file</h1>goto HOMEPAGE:click <a href='/'>here</a></body></html>");
	res.write("Replacing file is Done",fs.appendFile('file.txt', 'data', function(err, data){
    	if (err) console.log(err);
			console.log("Successfully Replaced a File.");
		}));
		
		res.end();
}
function deletefile(req,res){
    res.writeHead(200,{ "content-Type" : 'text/html'});
    res.write("<html><body><h1>Deleting file</h1>goto HOMEPAGE:click <a href='/'>here</a></body></html>");
    res.write("Deleting the content of the file",fs.unlink('file.txt','', function(err, data){
    					if (err) console.log(err);
                        console.log("Successfully deleted the content of the File.");
                    }));
    res.end();                    
}
function get404(req,res){
    res.writeHead(404,"Resource not found",{ "content-Type" : 'text/html'});
    res.write("<html><body><h1>Resource not found:</h1>goto HOMEPAGE:click <a href='/'>here</a></body></html>");
    res.end();
}
function get405(req,res){
    res.writeHead(405,"Method not defined",{ "content-Type" : 'text/html'});
    res.write("<html><body><h1>Method not defined:</h1>goto HOMEPAGE:click <a href='/'>here</a></body></html>");
    res.end();
}
//create a server object:
http.createServer((req, res) => {
    var url = req.url;
    switch (req.method){
        case "GET":
                if(url === '/') {
                    homepage(req,res);
                }
                else if(url === '/create') {
                    createfile(req,res);
                } 
                else  if(url === '/display') {
                    display(req,res);
                }
                else {
                    get404(req,res);
                }
                break;
        case "POST":
                    if(url === '/create') {
                        var reqBody="";
                        req.on('data',function(data){
                            reqBody +=data;
                            if(reqBody.length > 1e7){
                                res.writeHead(413,"Too much of data:",{ "content-Type" : 'text/html'});
                                res.write("<html><head><title>413</title></head><body><h1>Too much of data::</h1>goto HOMEPAGE:click <a href='/'>here</a></body></html>");
                                res.end();
                            }
                        });
                        req.on('end',function(data){
                            var formData=qs.parse(reqBody);
                            res.writeHead(200,{ "content-Type" : 'text/html'});
                            res.write("<html><body><h1>Creating file</h1>goto HOMEPAGE:click <a href='/'>here</a></body></html>");
                            res.write("writing file",fs.writeFileSync('file.txt',data,function(err, data){
                                    if (err) console.log(err);
                                    console.log("Successfully Written to File.");
                                }
                            )); 
                            res.end(); 
                        });
                    }
                    else if(url === '/replace') {
                        replacefile(req,res);
                    }
                    else {
                        get404(req,res);
                    }
                    break;
        case "DELETE":
                    if(url === '/delete') {
                        deletefile(req,res);
                    }
                    break;
        default :
                    get405(req,res);
                    break;
    }
}).listen(7777, () => {console.log("server start at port 7777"); });    
    