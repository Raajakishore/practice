console.log('hi')
//object creation
let gg = {
    name:'raaj',
    clg:'KCT',
    roll_no:'70'
}
console.log(gg.clg);

//es6 method
let es6_tut = {
    name:'raaj',
    roll_no:'70',
    subject:'DBMS',
    marks(mark){
        if(mark>50)
        return 'pass';
        return 'fail';
    }
}
console.log(es6_tut.marks(49));

//inheritance
let animal={
    living_thing:true,
    blood:'red',
    legs(species){
        if (species=='dog')
        return 'four'
    }
   
}
let dog={
    species:'dog',
    prototype:animal,
    teeth:48
}
console.log(dog.legs('dog'))

//this
var person = {
    name:'raaj',
    roll_no:'70',
    student_perfomance(){
        console.log(this);
    }
}
perf = person.student_perfomance.bind(person);
perf();

//arrow_functions
var square = number => number*number;
console.log(square(2))

var sum_of_two_numbers = (a,b)=>{
    c=a+b;
    return c;
}
console.log(sum_of_two_numbers(1,2));

//Arrays.map()
arr = [1,2,3];
arr = arr.map(number => number*number);
console.log(arr);

//object destructuring:
student = {
    name:'raaj',
roll_no:70,
college:'KCT'
}
var {name:n,college:clg} = student;
console.log(n,clg);

//spread operators
first=[1,2,3]
clone=[...first];
console.log(clone);
console.log(first);

first = [1,2,3];
second = [4,5,6];
third = [...first,...second];
console.log(third);

// classes
class Person{
          constructor(name,gender){
         this.nam=name;
         this.gender=gender;
     }
     display(){
         console.log(this.nam,this.gender);
     }
}
person = new Person('raaj','male');
person.display();

//exports
import Teacher, { whoami } from './teacher';
whoami();
teacher = new Teacher('raaj','KCT');
teacher.getdetails();