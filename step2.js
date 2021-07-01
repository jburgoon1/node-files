const fs = require('fs')
const path = require('path')
const axios = require('axios')

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });

function cat(path){
    path = process.argv[2]
    fs.readFile(path, 'utf8', function(err, data){
    if(err){
        console.log('oh no')
    }
        console.log(data)
    })
    
}


async function webCat(path){
    path = process.argv[2]
    const url = await axios.get('http://www.google.com')
    console.log(url.data)
}

function chooseFunction(){
    if(path.extname(process.argv[2]) == '.txt'){
        cat()
    }else{
    webCat()
    }
}
chooseFunction()