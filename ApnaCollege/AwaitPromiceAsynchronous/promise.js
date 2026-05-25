// let promicse = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success   "); 
// }); 

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err); 
// });



// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     })  
// }

// promise chain

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 5000);
    })
}

let q1 = getData(1);
q1.then((res) => {
    console.log(res);
});


//Promise Chain

getData(1)
    .then((res) => {
        console.log("getting data1 .....");
        return getData(2);
    })
    .then((res) => {
        console.log("getting data2 .....");
        return getData(3);
    })
    .then((res) => {
        console.log("getting data3 .....");
        console.log(res);
    });














// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 3000);
//     })
// }


// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         }, 2000);
//     })
// }

// // first method
// console.log("fetching data1 .......");
// asyncFunc().then((res) =>{
//     console.log("fetching data2 .......");
//     asyncFunc2().then((res) => {});
// });



// third method

// console.log("fetching data1 .......");
// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log((res));
//     console.log("fetching data2 .......");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);
//     })
// });

// second method hai
// console.log("fetching data2 .......");
// let p2 = asyncFunc();
// p2.then((res) =>{
//     console.log((res));
// });









