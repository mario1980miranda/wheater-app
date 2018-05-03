console.log('Starting App');

setTimeout(() => {
    console.log('First Callback');
}, 2000);

setTimeout(() => {
    console.log('Second Callback');
}, 0);

console.log('Ending App');