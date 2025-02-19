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