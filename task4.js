// function addWithDelay(){
//     let result = 0;
// //     // let arr = [];
//     for(let i = 0; i < arguments.length; i++){
//         if(arguments[i] >= 0){
//         result += arguments[i];
//         } else {
//             console.log("Error! Some parameter is a negative number!");
//         }
//         // console.log(arguments[i]);
        
//         // if(i > 0){
//         //     arr.push(arguments[i]);
//         // }
//     }
//     console.log(result);
//   }
//  addWithDelay(1,2, -3);
//     // console.log(arr);
// }
// console.log(result);
// return result;
// }

// addWithDelay(1, 2, 3, -5);

// const promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('foo');
//     }, 300);
//   });
  
//   promise1.then(function(value) {
//     console.log(value);
//     // expected output: "foo"
//   });
  
//   console.log(promise1);
//   // expected output: [object Promise]

// let myFirstPromise = new Promise((resolve, reject) => {
//     setTimeout(function(){
//       resolve("Success!"); // Ура! Всё прошло хорошо!
//     }, 1000);
//   });
  
  // myFirstPromise.then((successMessage) => {
  //   console.log("Ура! " + successMessage);
  // });

//   function addWithDelay(){
//     let result = 0;
//   for(let i = 0; i < arguments.length; i++){
//     result += arguments[i];
//   }
//   console.log(result);
// }


// let myPromise = new Promise((resolve, reject) => {
//   function addWithDelay(){
//     let result = 0;
//   for(let i = 0; i < arguments.length; i++){
//     result += arguments[i];
//   }
// }
// })
// myPromise.then(
//   setTimeout(function(){
//     resolve(result);
//   }, 1000),
//   error => console.log(error)
//   );

// addWithDelay(1, 2)

// const addWithDelay = () => new Promise();
// addWithDelay(10).then(() => {
//   console.log("отжался 10 раз");
// })

function wringOut(count){
  return new Promise((resolve, reject) => {
    if(count < 0){
    reject(new Error("ERROR and ALARM"));
    }
    setTimeout(() => {
      resolve(count + 1);
    }, 1000);
});
}

console.log("start working");
wringOut(5).then(() => {
  console.log('count');
});

