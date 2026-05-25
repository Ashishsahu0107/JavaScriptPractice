//  function hello(){
//     console.log("hello");    
//  };

//  setTimeout(hello, 2000);

// Asynronous programming

// console.log("first");
// console.log("second");


// setTimeout(() => {
//     console.log("hello");
// }, 5000); // timeout 

// console.log("third");
// console.log("forth");


// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b, sumCallBack){
//     sumCallBack(a,b);
// }

// calculator(1,2,sum);


// calculator(4,6, (a ,b) => {
//     console.log(a+b);
// });


function getData(dataId, getNextData) {
    // 2s
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

// Callback Hell

// Callback Hell: Nested callbacks stacked below one another forming a pyramid structure.
// (Pyramid of Doom)

// This style of programming becomes difficult to understand & manage.

getData(1, () =>{
    console.log("getting data2 ....");
    getData(2, () => {
        console.log("getting data3 ....");
        getData(3, () => {
            console.log("getting data4 ....");
            getData(4);   
        })
    })
})








