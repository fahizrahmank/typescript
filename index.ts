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

//   type Details = {
//         name: string; age: number
//         getName:() => void
//     }

//     let userDetails:Details = {
//     age: 100,
//     name: "fahix",
//     getName() {
//         console.log(this.name);

//     },
//   };

//union / optional

// type Details = {
//   name: string;
//   age?: number | string;
//   getName?: () => void;
// };

// let userDetails: Details = {
//   age: "100",
//   name: "fahix",
//   getName() {
//     console.log(this.name);
//   },
// };

// let skillls: (string | number | boolean)[] = ["js", "ts", "css", 20, 40, false];

//functions

// type Details = {
//   name: string;
//   age?: number | string;
//   getName?: () => void;
// };

// let userDetails: Details = {
//   age: "100",
//   name: "fahix",
//   getName() {
//     console.log(this.name);
//   },
// };
// function getUserName(userDetails:Details):string {
//     return  userDetails.name;
// }

// const newVal = getUserName(userDetails)
// newVal.length

//named types

 type StatusType = 'pending ' | 'completed' | 'failed'
type ToggleSwitch = 'on'| 'off'

 let currentStatus : StatusType = "completed"
 let toggleSwitch : ToggleSwitch = 'off'

 toggleSwitch = 'on'
         // from api
const response = 'pending'
if(response === 'pending') {
    currentStatus = 'pending '
}         