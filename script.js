//EASY
function exercise(x) {
  return "Today's exercise is " + x;
}
const run = exercise("Running");
const swim = exercise("Swimming");
console.log(run);
console.log(swim);
// var run = exercise('running')
// console.log(run);

//MEDIUM
function cutPizzaSlices(slices, people) {
  return `Each person gets ${slices / people} slices of pizza`;
}
console.log(cutPizzaSlices(8, 2));
console.log(cutPizzaSlices(8, 3));

//hard challenge
// before es6

// function pii(name,ssn){
//   let _name = name
//   let _ssn = ssn
//   this.getname = function(){
//     return _name;
//   }
// }
// const person1 = new pii('drew', 111-22-3344);
// let person2 = new pii('rashaad', 111-22-4455);
// console.log(person1.getname());

//es6
class Person {
  #name
  #ssn


  constructor(name, ssn){
    this.#name = name;
    this.#ssn = ssn;
  }
  
  //FUNCTION TO ACCESS THE NAME 
  // iWantTheName(){
  //   return this.#name
  // }
  // same function as above but by using getters
    get name (){
      return this.#name
    }
}

const person3 = new Person('Colin', 4455)
console.log(person3.ssn)
console.log(person3.name)
// console.log(person3.iWantTheName())


//this below is the a diff way to keep data isolated
// (
//   ()=>{
  
//   const person3 = new Person(prompt('name'), promp('ssn'))
//   console.log(person3.ssn)
//   console.log(person3.name)
// }
// )()

//very hard challenge
class newPerson {
    name;
    job;
    age;
  
    constructor(name, job, age) {
      this.name = name;
      this.job =job;
      this.age =age;
    }
  
    exercise(){
      console.log( `Running is fun`)
    }
    fetchJob(){
      console.log( `${this.name }is a ${this.job}`)
    }
  
  
  }
  const worker = new Person("Rashaad","software",26)
  console.log(worker)
  




