// 1
const person = {
    greet() {
      console.log("Hello!");
    }
  };
  
  const user = Object.create(person); // user now inherits from person
  user.greet(); // "Hello!"


// 2 Creating Prototypes using Constructor Functions
function Person(name){
    this.name = name;
    }
    
    
    Person.prototype.sayHello = function(){
    
    console.log(`Hello my name is ${this.name}`);
    }
    
    const john = new Person('John');
    
    john.sayHello();