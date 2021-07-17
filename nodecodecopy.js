const { readFileSync,writeFileSync} =require("fs")
let first = readFileSync("./first.txt",'utf8')
writeFileSync("./third.txt","i am third text mamew")
// let third = readFileSync(".third.txt",'utf8')
// console.log(third);

const { readFile } = require("fs")
readFile("./first.txt","utf8",(err,res)=>{
    if(err){
        console.log(err,"first err");
        return
    }
    console.log(res,"1 st sucess");
    readFile("./second.txt","utf8",(err,res)=>{
        if(err){
            console.log(err,"2nd err");
            return
        }
        console.log("2nd sucess");

    })
})
const http = require("http")

const createVerver = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("welcome")
    }
    else if(req.url==="/about"){
        res.end("about page da venna")
    }
    else{
    res.end(`bb`)
    }
})
createVerver.listen(5000)