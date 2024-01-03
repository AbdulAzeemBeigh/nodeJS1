const fs = require("fs");    // using fs module of node.js
const { text, json } = require("stream/consumers");
const http = require("http");   // using http module of node.js

/////////////////////////////////////////////////////
//FILES
// const hello = "Hello world !";
// console.log(hello);

// reading from a file SYNCRONOUS WAY

// const textIn = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(textIn);

// writing to a file SYNCHRONOUS WAY

// const textOut = `This is what we about the delicious fruit that is known as AVOCADO: ${textIn}.\n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/newFile.txt',textOut);
// console.log("file written!");

// reading and writing to a file, ASYNCHRONOUS WAY
// fs.readFile('./txt/start.txt','utf-8',(err, data1)=>{
//     if(err) return console.log("There has been an error!!");
//     console.log(data1);
//     fs.readFile('./txt/read-this.txt','utf-8',(err,data2)=>{
//         if(err) return console.log("There has been an error!!");
//         console.log(data2);
//         fs.readFile('./txt/append.txt','utf-8',(err,data3)=>{
//             console.log(data3);
//             fs.writeFile('./txt/final.txt',`${data1}.\n${data2}.\n${data3}`,'utf-8',(err)=>{
//                 if(err) return console.log('There has been an error!!');
//             })
//         })
//     })
// });
// console.log("AYNC way!");

///////////////////////////////////////////////////////////////////////////////////////////////
// SERVER
// const server = http.createServer((req,res)=>{
//     res.end("response from server!");
//     console.log(req);
// });

// server.listen(8000,'127.0.0.1', ()=>{
//     console.log("Listening to requests on port 8000");
// });
//////////////////////////////////////////////////////////////////////////////////
// ROUTING

// const server = http.createServer((req,res)=>{
//         // console.log(req.url);
//         const pathName = req.url;
//         if(pathName === '/' || pathName ==='/overview'){
//             res.end("This is OVERVIEW!!");
//         }else if (pathName ==='/product'){
//             res.end("This is PRODUCT!!");
//         }else{
//             res.writeHead(404,{
//                 'content-type' : 'text/html',
//                 'my-own-header': 'hello-world'
//             });
//             res.end(`<h1>PAGE NOT FOUND!</h1>`);
//         }
// });
    
// server.listen(80,'127.0.0.1', ()=>{
//         console.log("Listening to requests on port 80");
//  });
 ////////////////////////////////////////////////////////////////
 //CReating a simple api
 
// const server = http.createServer((req,res)=>{
//     const pathName = req.url;
//     if(pathName ==='/api' || pathName ==='/'){
//         console.log("This is api");
//         fs.readFile(`${__dirname}/dev-data/data.json`,'utf-8',(err,data)=>{
//             if(err) return console.log("There is error in readfile");
//             const parsedData = JSON.parse(data);
//             console.log(parsedData);
//             res.end(parsedData);
//         });
//     }else{
//         res.writeHead(404,{
//             'content-type': 'text/html',
//             'my-own-header':'hello-world'
//         });
//         res.end(`<h1>Page Not Found.\n\ enter api in the url</h1>`);
//     }
// });

// server.listen(8000,'127.0.0.1', ()=>{
//     console.log("SERVER listening at port 8000");
//   });

  ///////////////////////////////////////////////////////////////
  // Loading an HTML file using node.js

  const server= http.createServer((req,res)=>{
    const path = req.url;
    if(path ==='/' || path ==='/overview'){
        fs.readFile(`${__dirname}/templates/overview.html`,'utf-8',(err,data)=>{
            if(err) return res.end(`<h1>Failed Loading The Page</h1>`);
            res.end(data);
        });
    }else if(path ==='/product'){
        fs.readFile(`${__dirname}/templates/product.html`,'utf-8',(err2,data2)=>{
            if(err2) return res.end(`<h1>There is an Error in ReadFile</h1>`);
            res.end(data2);
        });
    }else{
        res.writeHead(404,{'error-type':'please check the url PATH'});
        res.end(`<h1>Page Not Found</h1>`);
    }
  });
  server.listen(8000,'127.0.0.1',()=>{
    console.log("Server is Listening at port 8000");
  });