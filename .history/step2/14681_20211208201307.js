const fs = require("fs");

const data = fs.readFileSync("./data").toString().split("\n");

const x= data[0];
const y= data[1];

if (0<x && 0<y){
    console.log(1);
}else if(x<0 && 0<y){
    console.log(2);
}else if(x<0 && y<0){
    console.log(3);
}else if(0<x && y<0){
    console.log(4);
}