function addWithDelay(...args) {
  let sum = 0;
  console.log("get numbers");
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (args.every(element => element > 0)) {
        for (let i = 0; i < args.length; i++) {
          sum += args[i];
        }
        resolve(sum);
      } else reject('Error! Some parameter is a negative number!');
    }, 3000);
  });
  return promise;
}



addWithDelay(7, 2, 1).
  then(
    result => console.log(result),
    error => console.log(error));