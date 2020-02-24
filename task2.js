function getSeconds(){
let now = new Date;

let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let answer = Math.round(now - today) / 1000;

console.log(answer + " seconds");
}

getSeconds();