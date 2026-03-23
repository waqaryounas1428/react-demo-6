const {Product} =require("./mymodules/oopdemo01");

// const p1={ id : 1,   name : "aaaa", price : 1000, gstRate : 18 };
// const p2={ id : 2,   name : "bbbb", price : 1500, gstRate : 10 };

// const p = {
//     id: 1,
//     name: "aaaa",
//     price: 1000,
//     gstRate: 18,


//     ////method
//     // gstAmount : function() {
//     //     return this.price * this.gstRate / 100;
//     // }, 

//     // //method
//     // retailPrice : function(){
//     //     return this.price + this.gstAmount();
//     // }

//     gstAmount() {
//         return this.price * this.gstRate / 100;
//     },
//     retailPrice() {
//         return this.price + this.gstAmount();
//     }


// };

// const p1=new Product(1,"aaaa",1000,18);
// const p2=new Product(2,"bbbb",1500,10);




// console.log(`Name: ${p1.Name}`);
// console.log(`Price: ${p1.Price}`);
// console.log(`Price: ${p1.GstAmount()}`);
// console.log(`Retail Price: ${p1.RetailPrice()}`);

//const p1=new Product(1,"aaaa",1000,18);

//console.log(typeof(p1));
//console.log(p1 instanceof Product)


// const p1=new Product();

// // p1.setPrice(-100);
// p1.Price=-100;

// // console.log(p1.getPrice())
// console.log(p1.Price)


const p1=new Product(2,"aaaa",1500,10);
// p1.Id=1;
// p1.Name="aaaa";
// p1.Price=1000;
// p1.GstRate=18;

console.log(p1.Id);
console.log(p1.Name);
console.log(p1.GstRate);
console.log(p1.Price);

console.log(p1.Summary);
console.log(p1.Details);

