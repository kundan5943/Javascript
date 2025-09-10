//Q1.Creates a program to get a number from1 to 6 representing dice game
let randomno=Math.floor(Math.random()*6)+1;
console.log(randomno);

//Q2.Create an object representing a car that stores the following properties for the car:name,model,color.Print the car’s name

let car={

    name:"Maruti Suzuki",
    model:"V6",
    color:"silver"
    
};

console.log(car["name"],car.name);


// Qs3. Create an object Person with their name, age and city.
// Edit their city's original value to change it to "New York".
// Add a new property country and set it to the United States.

const Person={
      
    name:"kundan",
    age:18,
    city:"Raver"

};

Person.city="New York";
console.log(Person.city);

Person.country="UNited States";
console.log(Person.country);