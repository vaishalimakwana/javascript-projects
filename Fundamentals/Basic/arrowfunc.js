//let user = {name : "Vaishali", age: 36, getDetails() {console.log(this)}};
let user1 = {
name : "Vaishali", 
age: 36,
childObj:{
  newName: "Makwana",
  getDetails() {console.log(this.newName,"and", this.name);},
				},
};
user.childObj.getDetails();

let user = {
    name : "Vaishali", 
    age: 36,
    getDetails:() =>  {console.log(this);},
                  
    };
    user.getDetails();

// Arrow Function
let user = {
    name : "Vaishali", 
    age: 36,
    parentfunction() {
    const getDetails= () => console.log(this.name);
    getDetails();
        },
    }
    user.parentfunction();

// 3
var name = "Jack"; // Global name variable

function checkArrow(fn) {
    name = "Jill";  // This changes the global `name` variable
    const obj = {
        name: "Alice",  // Local name property in the object
        regularFunction: function () {
            console.log("Regular:", this.name);  // 'this' refers to the object when called via call()
        },
        arrowFunction: () => {
            console.log("Arrow:", this.name);  // 'this' refers to the lexical scope (global)
        }
    };

     fn(obj);  // Pass 'obj' to the function

}
checkArrow(function(obj) { obj.regularFunction(); });  // Regular: Alice
checkArrow(function(obj) { obj.arrowFunction(); });   // Arrow: undefined   