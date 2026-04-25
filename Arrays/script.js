// let users = ["ram", "ravi", "raj", "ws"]
// console.log(users[0]);
// console.log(users[3]);

// let l = [10, 20, 30, 40, 50, [99, 77, 66]]
// console.log(l[5]); //[99,77,66]]
// console.log(l[2]);


// console.log(l[5][0]);

// let users = ["ram", "ravi", "raj", "ws", 10, 20]
// for, for in, for of


// console.log(users.length);


//for
// for(let i=0; i<users.length; i++){
//     console.log(i,users[i])
// }


// print index and value
// for (let i = users.length-1; i>=0; i--){
//     console.log(i,users[i])
// }


//for in
// print value
// let num = [10,20,30,40,50,60]
// for (let l of num) {
//     console.log(l);
// }

// print indexing
// for (let k in num) {
//     console.log(k);  
// }

// let sum = 0;
// for(let m in num){
//     sum+=m;
// }
// console.log(sum);


// let l1 = [10,22,33,44,55,66,77,88];

// l1.push(99); // add last element
// push multiple values
// l1.push(11,12,13,14,15);
// l1.fill(2);
// console.log(l1);

// pop(): Removes the last element from an array.
// let m = [1,2,3,4,5,6]
// console.log(m.pop()); 

// m.pop();
// console.log(m);


// shift(): Removes the first element from an array.
// let n = [1, 2, 3, 4, 5, 6]
// n.shift();
// console.log(n.shift());
// console.log(n); 




// unshift(): Adds one or more elements to the beginning of an array.
// let x = [11,22,33,44,55]

// x.unshift(24);
// console.log(x);

// x.unshift(20,30);
// console.log(x);



// splice(): Adds, removes, or replaces elements at a specified index.

// let l = [1,2,3,4,5,6,7,8];
// console.log(l);

// l.splice(1,4);
// console.log(l);

// l.splice(1,3,10,20,30,40);
// console.log(l);



// sort(): Sorts the elements of an array in place.

// let xy = [20,14,17,90,34,75,83];
// xy.sort()
// console.log(xy);


// reverse(): Reverses the order of elements in an array in place.

// xy.reverse()
// console.log(xy);


// fill()

// let l = [1,2,3,4,5,6,7,8,9];
// l.fill("Ashish", 0,2)

// console.log(l);


// let l = [1,2,3,4]
// for (let m of l) {
//     l.pop();
// }
// console.log(l);



/*  Non - Mutating Methods(Return a new array or value without modifying the original):*/


// 1. slice(): Returns a shallow copy of a portion of an array into a new array.

// let color = ["red", "black", "yellow", "green", "white"];
// let newArray = color.slice(1, 2);
// let newArray1 = color.slice(1, 4);
// let newArray2 = color.slice(1, 1);
// console.log(newArray);
// console.log(newArray1);
// console.log(newArray2);

// 2. concat(): Joins two or more arrays, returning a new array.

// let l1 = [10, 20, 30];
// let l2 = [40, 50, 60];
// let l3 = [22, 33, 44];

// let finalArray = l1.concat(l2, l3);
// console.log(finalArray);

// 3. includes(): Determines whether an array includes a certain value among its entries, returning true or false.

// let x1 = [10,20,30,40];
// let find = x1.includes(55);
// console.log(find);


// 4. indexOf(): Returns the first index at which a given element can be found in the array, or - 1 if it is not present.


// 5. join(): Joins all elements of an array into a string.
// 6. toString(): Returns a string representing the specified array and its elements.


// 1..










