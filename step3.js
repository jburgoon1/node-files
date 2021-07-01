const fs = require('fs')
const path = require('path')
const axios = require('axios')

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });

function cat(path){
    path = process.argv[4]
    fs.readFile(path, 'utf8', function(err, data){
    if(err){
        console.log('oh no')
    }
        // console.log(data)
    })
}
    
function catWrite(path){
    path = process.argv[4]
    fs.readFile(path, 'utf8', function(err, data){
    if(err){
        console.log('oh no')
    }
        // console.log(data)
        outSource(data)
    })
    
}


async function webCat(path){
    path = process.argv[4]
    const url = await axios.get('http://www.google.com')
    // console.log(url.data)
}
async function webCatWrite(path){
    path = process.argv[4]
    const url = await axios.get('http://www.google.com')
    // console.log(url.data)
    outSource(url.data)
}

function chooseFunction(){
    if(process.argv[2]== '--out'){
        if(path.extname(process.argv[4]) == '.txt'){
            catWrite()
        }else{
        webCatWrite()
        }
    }else{  
        if(path.extname(process.argv[2]) == '.txt'){
        cat()
    }else{
    webCat()
    }}
    
    
  
    
}
chooseFunction()

function outSource(data){
    if(process.argv[2]== '--out'){
        const newFile = process.argv[3]
            fs.writeFile(newFile, data, 'utf8', (err) =>{
                if(err){
                    console.log(err)
                }
                fs.readFile(newFile, 'utf8', (err, data) => {
                    if(err){
                        console.log(err)
                    }
                    console.log(data)
                })
            })
    }
}
