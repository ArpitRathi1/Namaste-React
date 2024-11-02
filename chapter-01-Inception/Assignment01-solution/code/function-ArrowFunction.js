// Difference Between normal and arrow functions.

// 1) Arrow functions in JavaScript do not have their own arguments object. 
// Instead, they inherit the arguments object from the surrounding lexical context, which is typically the nearest non-arrow function.
function sum(x,y){
    console.log(arguments);      // output : { '0': 2, '1': 3 }
    return x + y;
}
sum(2,3)

// const add = (x,y) => {
//     console.log(arguments);
//     return x + y
// }
// add(2,3)

// 2) Regular function are "constructable" and "callable".
function Car(name){
    this.brand = name
}
const carData = new Car("Tata")
console.log(carData)

// const NewCar = (name) => {
//     this.brand = name
// }
// const carData2 = new NewCar("Suzuki")    // TypeError : NewCar is not a constructor
// console.log(carData2)

// 3) Arrow function don't have their this.
let userInfo = {
    fullName : "Arpit Rathi",
    showFullName(){
        console.log(this.fullName)
    },
    showFullNameArrow : () =>{
        console.log(this.fullName)
    }
}

userInfo.showFullName()           // output : Arpit Rathi
userInfo.showFullNameArrow()      // output : undefined

// More -> In js this referes to the current context.
//         In case of browser : At global level this refers to the window object 
//         In case of node : At global level this refers to the empty object 

console.log(this)

let user = {
    firstName : "Arpit",
    price : 999,
    welcome : function(){
        console.log(this.firstName)
    }
}
user.welcome()               // output : Arpit
user.firstName = "Ashwin"
user.welcome()               // output : Ashwin

// But in case of function this won't work
function chai(){
    let firstName = "Arpit";
    console.log(this.firstName)
}
chai()                        // output : undefined

// 4) Implicit return by arrow function.
const addTwo = (x,y) => x + y
console.log(addTwo(2,3))      // output : 5

const returnObj = () => ({firstName : "Ankit"})     // To return obj always use ().
console.log(returnObj())                            // output : { firstName: 'Ankit' }