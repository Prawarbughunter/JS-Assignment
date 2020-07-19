const student={
     name:"helsinki",
     age:24,
     Project:{
         dicegame:"Two player dice game using javascript"
     }
}

const {name, age, Project:{dicegame}}=student;

console.log(name);
console.log(age);
console.log(dicegame);
