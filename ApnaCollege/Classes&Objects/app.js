const employee = {
    calcTax : function(){
        console.log("Tax rat is 10%");
    },
};



const karanArjun1 = {
    salary : 50000,
};
const karanArjun2 = {
    salary : 20000,
};
const karanArjun3 = {
    salary : 3000,
    calcTax: function () {
        console.log("Tax rat is 20%");
    },
};
const karanArjun4 = {
    salary : 10000,
};
const karanArjun5 = {
    salary : 90000,
};


karanArjun1.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;
karanArjun5.__proto__ = employee;

console.log(karanArjun1);
console.log(karanArjun2);
console.log(karanArjun3);
console.log(karanArjun4);
console.log(karanArjun5);
