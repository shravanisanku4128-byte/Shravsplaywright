function sum(a:number, b:number): number {
    return a + b;
    
}
console.log("The sum of 5 and 3 is: " + sum(5, 3));

function word(a:string, b:string) : string {
    return a +b;
}
 console.log(word("Hello," , "World"));
 

function myFunction3(a: number):void {
   console.log("The number is: " + a +"doenst return anything");
}

//Tuple types in TypeScript
let rsing :[string, number, boolean]
rsing = ["Hello", 42, true];
