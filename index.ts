// infer types (implicit types)

// let userName = 'fahiz';

// definig types (explicit types)

// let userName: string = "fahiz";
// let num: number = 3;
// let isMale: boolean = true;
// let skills: string[] = ["js", "ts", "css"];
// let count: number[] = [1, 2, 3, 4];
// let emptyArray: [] = [];
// let userDeatils: { name: string; age: number } = {
//   age: 100,
//   name: "fahix",
// };
// userDeatils.age = 200;


// interface

// interface Details {
//     name: string; age: number 
//     getName:() => void
// }

// let userDetails:Details = {
//     age: 100,
//     name: "fahix",
//     getName() {
//         console.log(this.name);
        
//     },
//   };

  //type

  type Details = {
        name: string; age: number 
        getName:() => void
    }

    let userDetails:Details = {
    age: 100,
    name: "fahix",
    getName() {
        console.log(this.name);
        
    },
  };