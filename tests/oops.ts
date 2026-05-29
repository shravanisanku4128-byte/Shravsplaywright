//Encapsulation is defined as the wrapping up of data under a single unit.
//In encapsulation, the variables of a class will be hidden from other classes, and can be accessed only through the methods of their current class. Therefore, it is also known as data hiding.
//Abstraction is defined as the process of hiding the implementation details and showing only functionality to the user. Abstraction lets you focus on what the object does instead of how it does it.
//inheritance is a feature of OOP that allows you to create a new class based on an existing class. The new class inherits the properties and methods of the existing class, and can also have its own additional properties and methods.
//Polymorphism is a feature of OOP that allows you to use a single interface to represent different types of objects. Polymorphism allows you to write code that can work with objects of different classes, as long as they share a common interface.
//realtime example of abstraction is a car. A car has many complex systems and components, such as the engine, transmission, and braking system. However, when you drive a car, you don't need to understand how these systems work. You just need to know how to operate the car, such as how to start it, accelerate, and brake. The details of how the car works are hidden from you, and you only interact with the car through its interface (the steering wheel, pedals, and buttons).
//realtime example of inheritance is a family. A child inherits certain traits and characteristics from their parents, such as eye color, hair color, and height. The child can also have their own unique traits and characteristics that are not inherited from their parents. In this way, the child is a new class that is based on the existing class of the parents, and inherits some of their properties and methods.
//realtime example of encapsulation is a bank account. A bank account has private data, such as the account balance and transaction history, that is hidden from the outside world. The account holder can only access this data through public methods, such as deposit and withdraw. This encapsulation of data helps to protect the integrity of the account and prevent unauthorized access.
//realtime example of polymorphism is a shape. A shape can be a circle, square, or triangle, and each shape has its own unique properties and methods. However, all shapes share a common interface, such as the ability to calculate their area and perimeter. This allows you to write code that can work with any shape, regardless of its specific type, as long as it implements the common interface.

class Myfirstcls {
    //constructor
    constructor() {
        console.log("My firstcls created");
    }

 // method
 mymethod(a: string): void {
console.log(a + " this is my method");
}
//variable
myvar: string = ("this is my variable");
}   

const obj = new Myfirstcls();
obj.mymethod("Hello" );
console.log(obj.myvar);


class example {
	 ages: number = 25;
	constructor() {
       
    	console.log("I am Constructor to class example i will be called");
	}
	method1() {
    	console.log("I am method1 of class example");
	}
     
}
//object created for class example
const objforclass = new example();//
objforclass.method1();
//objforclass.ages = 30;
console.log(objforclass.ages);

class chiru{
    screenname: string;
    constructor(screenname: string) {
        this.screenname = screenname;
    }
    display(): void {
        console.log("My screen name is " + this.screenname);
    }
}

const objchiru = new chiru("mega star");
objchiru.display();

class dad{
    constructor() {
        console.log("I am Constructor to class dad");
    }
    habits(): void {
        console.log("I am a good person");
    }
}
class me extends dad{
    habits(): void {
        console.log("I am a very good person");
    }
}
const objme = new me();
objme.habits();



class mom{
    constructor() {
        console.log("I am Constructor to class mom");
    }
    occup(): void {
        console.log("she's a teacher");
    }
}
class child extends mom{
    occup(): void {
        super.occup();
        console.log("i am a QA");
    }
}
const obj1 = new child();
obj1.occup();

class child1 extends mom {    
//overlaoding
    add(a: number, b: number): number
    add(a: number, b: number, c: number): number;
    add(a: number, b: number, c?: number): number {
        if (c !== undefined) {
            return a + b + c;
        } else {
            return a + b;
        }
    
    }      
}



class Chiranjeevi {
    screenname: string;
    constructor(screenname: string) {
        this.screenname = screenname;
        console.log(`Constructor called with Title Card: ${screenname}`);
    }
    display(): void {
        console.log(`Screen Name: ${this.screenname}`);
    }
}
const chiruobject = new Chiranjeevi("Megastar");// title card Variable is Megastar
chiruobject.display();
 

class Chiru {        
    cashInSwiss: number=100;
    propertyONE(): void {
        console.log(`Kokapeta Farm house`);
    }    
}
 
class cherry extends Chiru {
    cashInSwiss: number=200;
    
    propertyONE(): void {
        super.propertyONE();
        console.log(`Appollo Hospital`);
    }
}
let rcobjt=new cherry();
rcobjt.propertyONE();//Appollo Hospital " here parent class method is overridden by child class method and it is called as method overriding"
 
 
 
 
// This ... current class members 
//super .. parent class memebrs 
 
 
class Ramcharan extends Chiru {    
//overlaoding
    add(a: number, b: number): number
    add(a: number, b: number, c: number): number;
    add(a: number, b: number, c?: number): number {
        if (c !== undefined) {
            return a + b + c;
        } else {
            return a + b;
        }
    }      
    
}
 
//enum is a user-defined type that consists of a set of named constants called members. It allows you to define a collection of related values that can be used as a type in your code. Enums are often used to represent a fixed set of options or categories.
enum movietype {
    Action,
    Comedy,
    Drama,
    Horror,
    SciFi
}
let myFavoriteMovie: movietype = movietype.SciFi;
console.log(myFavoriteMovie); // Output: 4 (the index of the enum member)
 