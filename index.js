//Ternary operators :
let marks=20;

//marks >= 33 ? console.log("You passed !") : console.log("You failed !");

let age=30;

//nested Ternary operators :
let group = age < 18 ? "teenager" : age < 45 ? "adult" : "senior-citizen";

//console.log(group);

//1D Array : 

let fruits = ["mango","cherry"];
//console.log(fruits);

//Multidimensional Array : Array inside an array

let shoppingList = [
    ["laptop",undefined,"earphones"],
    ["mango",true,"papaya"],
    ["shirts",2,99,"tops",false,100]
];

console.table(shoppingList);
console.log(shoppingList[1][2]);

//Using nested for loop :
for(let i=0;i<shoppingList.length;i++)
{
    for(let j=0;j<shoppingList[i].length;j++)
    {
        console.log(shoppingList[i][j]);
    }
}

//printing pattern :
let pattern="";
//Outer/External loop :
for(let i=1;i<=5;i++)
{
    //i=1, i=2, i=3
    for(let j=1;j<=i;j++)
    {
        console.log(j);
        //pattern = pattern + "*";
        pattern += i;
    }
    //pattern=pattern+"\n"
    pattern += "\n";
}

console.log(pattern);

//Object :-

const person={
    age : 20,
    name : "xyz",
    TorF : true
}

console.log(person.age);




