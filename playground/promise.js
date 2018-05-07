var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers.');
            }
        }, 1500);
    });
};

// asyncAdd(2, 2).then((res) => {
//     console.log('Result is: ' + res);
//     return asyncAdd(res, 33);
// }, (errorMessage) => {
//     console.log(errorMessage);
// }).then((res) => {
//     console.log('Should be 37. Result is: ' + res);
// }, (errorMessage) =>{
//     console.log(errorMessage);
// });

asyncAdd(2, 2).then((res) => {
    console.log('Result is: ' + res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('Should be 37. Result is: ' + res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Hey. It worked.');
//         reject('Unable to fulfill the promise.');
//     }, 2500);

// });

// somePromise.then((message) => {
//     console.log('Sucess: ' + message);
// }, (errorMessage) => {
//     console.log('Error: ' + errorMessage);
// });