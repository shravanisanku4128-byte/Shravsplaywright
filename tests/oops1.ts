abstract class normal {
method1(): void{
console.log("I am a normal class");
    }
abstract method2(): void;
abstract method3(): void;
}   
class childclass extends normal {
    method1(): void {
        console.log("I am method1 of childclass");
    }
    method2(): void {
        console.log("I am method2 of childclass");
    }
    method3(): void {
        console.log("I am method3 of childclass");
    }
}

interface myinterface {
    age: number;
    name: string;
    price: number;
    instock: boolean;
    method1(): void;
    method2(): void;
    method3(): void;
}
let p1: myinterface = {
    age: 25,
    name: "Asha",
    price: 1000,
    instock: true,
};
let p2 : myinterface = {
    age: 30,
    name: "Ravi",
    price: 2000,
    instock: false,
};
console.log(p1.age);
console.log(p2.name);    
