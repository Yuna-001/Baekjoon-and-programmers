const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (str) {
    let result = "";
    for(const c of str){
        const upper = c.toUpperCase()
        if(c === upper){
            result += c.toLowerCase();
        }else{
            result += upper;
        }
    }
    console.log(result)
}).on('close',function(){
});