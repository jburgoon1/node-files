const fs = require('fs')


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
cat()