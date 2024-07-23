// Given an array of integers (nums), your task is to find the single element that appears only 
// once in the array. All the other elements appear twice in the array.


  function singleNumber(nums) {
      let result = 0
      for (const num of nums) {
          result ^= num
      }
      return result
  }
   const nums=[1,1,2]
   console.log(singleNumber (nums));

// ****************************************************************************************

  Reverse the given array with function const arr = [56, 2, 4, 9, 8, 23, 45, 12, 67, 12, 87, 8, 9, 35, 37];

// const arr = [56, 2, 4, 9, 8, 23, 45, 12, 67, 12, 87, 8, 9, 35, 37];
// arr.reverse();
// console.log(arr);

  Reverse the given array withOut any function const arr = [56, 2, 4, 9, 8, 23, 45, 12, 67, 12, 87, 8, 9, 35, 37];
  const arr = [56, 2, 4, 9, 8, 23, 45, 12, 67, 12, 87, 8, 9, 35, 37];
  var newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
     newArr.push(arr[i])
   }

// Reverse the given array withOut function
// const arr = [56, 2, 4, 9, 8, 23, 45, 12, 67, 12, 87, 8, 9, 35, 37];

// let revArr= []
// for(let i=arr.length-1;i>=0; i--)
// {
//     revArr.push(arr[i])
// }
// console.log(revArr);

// ********************************************************************************************

//  Reverse the given array without using builtin function const arr = [56, 2, 4, 9, 8, 23, 45, 12, 67, 12, 87, 8, 9, 35, 37];

// const arr = [56, 2, 4, 9, 8, 23, 45, 12, 67, 12, 87, 8, 9, 35, 37];
// const length = arr.length;
// const middleIndex = Math.floor(length / 2);

// for (let i = 0; i < middleIndex; i++) {
//   const temp = arr[i];
//   arr[i] = arr[length - 1 - i];
//   arr[length - 1 - i] = temp;
// }

// console.log(arr);

// *********************************************************************************************

// Reverse string without change a position
// function reverseString(str) {
//     var words = str.split(' ');
//     var reversedWords = words.reverse();
//     var reversedString = reversedWords.join(' ');
//     var reversed = '';
//     for (var i = reversedString.length - 1; i >= 0; i--) {
//       reversed += reversedString.charAt(i);
//     }
//     return reversed;
//   }

//   var input = 'Hi! This is Javascript';
//   var output = reverseString(input);
//   console.log(output);

// Reverse string without change a position without inside function

// var input = 'Hi! This is Javascript';
// var words = input.split(' ');
// var reversedWords = words.reverse();
// var reversedString = reversedWords.join(' ');
// var reversed = '';
// for (var i = reversedString.length - 1; i >= 0; i--) {
//   reversed += reversedString[i];
// }
// console.log(reversed);

// ++++++++++++++++=====================+++++++++++++++++++++++++++++++++++++++++

// const obj= [{
//   name:"pawan",
//   age:25,
//   mob:85647383465
// }]

// for(let res of obj){
//   console.log(res ,obj[res]);
// }

// =================================================**************************=-================

// Write a program to enter number up to right number not enter

// let no = 55;
// let i;

// while (i !== no) {
//   i = prompt("Enter number");// use this on console only
// }

// console.log("Number match");
// ===============================***********************============================

//Replace a character 
// const friend ="deepak"

// const newString=friend.replace("p","P")

// console.log(newString);


// const arr=[1,2,3,4,5,6]
// console.log(arr.length);
// // delete arr[0]
// console.log(arr.length);
// arr.pop()
// console.log(arr.length);

// const c=arr.join(" and ")
// console.log(c);

// const arr2=["banana", "Apple",'Greps']
// const arr2=[1,2,3,4,5,6]
// arr2.forEach ((elem)=>{console.log(elem)})


// const arr1=[221,55,121,44,35]

// arr1.sort()
// arr1.reverse()
// console.log(arr1);


// const arr12=[221,55,121,44,35]

// arr12.splice(2,2,324,432)

// console.log(arr12);


// const data = {
//     name:"pawan",
//     age:25,
//     mob:6536686233
// }

// for (let elem of data){
//     console.log(elem);
// }


// let arr =[22,14,67]

// let newArr=arr.map((value,index,arr)=>{
//     return (value + value);
// })
// console.log(newArr);

// let arr1 =[22,2,101,12,43]

// let b=arr1.filter((elem)=>{
//     return elem>22
// })
// console.log(b);


// const arr=[22,32,53,534,354,34]
// arr.push(22)

// console.log(arr);

// ==============================***************==================

//guess randome number game

// let no = Math.random() * 100;
// no = Number.parseInt(no)
// console.log(no);
// let num;
// let score = 100
// while (num != no) {
//     score = score - 1
//     num = prompt("Ener Number")
//     if (num === no) {
//         console.log("Congrats You guess the Correct Number ");
//         console.log(`You guess the actual number ${100 - score} Chances`);
//     } else if (num > no && num < 100) {
//         console.log("Your number is greater than the actual number");
//     }
//     else if (num < no && num > 0) {
//         console.log("Your number is less than the actual number");
//     }
//     else {
//         console.log("Enter Number between 1 to 100");

//     }
// }
// console.log(no);

// ==========================*****************==================
// Age limit for drive ask for check again Drive

// let run= true;
// const driveAge =(age)=>{
// return age >= 18 ? true : false;
// }

// while(run){
// let age=prompt("Enter age")
// age=Number.parseInt(age)
// if(age <0){alert("Please Enter Valid age number"); continue;}
// if(driveAge(age)){
//     alert("You can Drive");
// }else{
//     alert("You can't Drive");
// }
// run=confirm("Are you want to again try..?")
// }


// ========================****************===============
// relocate through direct BOM/DOM 
// let no=prompt("Enter number")
// no=Number.parseInt(no)
// if(no > 4){
//     location.href="https://chat.openai.com/?model=text-davinci-002-render-sha"
// }

// ======================***************************======================================
// Higher order and Callback Function

// const a = 10;
// const b = 20;
// const addi = function (a, b) {
//   return a + b;
// };
// const sub = function (a, b) {
//   return a - b;
// };
// const mult = function (a, b) {
//   return a * b;
// };
// const divi = function (a, b) {
//   return a / b;
// };

// const calculate = function (addi, a, b) {
//   return addi(a, b);
// };

// console.log(calculate(addi, a, b));
// console.log(calculate(sub, a, b));
// console.log(calculate(mult, a, b));
// console.log(calculate(divi, a, b));


//map function work on array

// const arr = [3, 2, 5, 3, 6];

// const newArr = arr.map((item) => {
//   return item + item;
// });

// console.log(newArr);
// ===========================================************************=============================
// addition of arrays each element  without using builtin method(reduce)

// const arr = [3, 2, 5, 3, 6];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }

// console.log(sum);

//display all first name only
// const user=[
//     {fname:"Diwan",lname:"Zende",age:25},
//     {fname:"Rawan",lname:"Londhe",age:23},
//     {fname:"Sawan",lname:"Shende",age:28},
//     {fname:"Jawan",lname:"Bhonde",age:23},
// ]

// user.map((item)=>{
//     console.log(item.fname);
// })

//display same age record  and display the count

// const user=[
//     {fname:"Diwan",lname:"Zende",age:25},
//     {fname:"Rawan",lname:"Londhe",age:23},
//     {fname:"Sawan",lname:"Shende",age:28},
//     {fname:"Jawan",lname:"Bhonde",age:23},
// ]

// const newRecord= user.reduce((accum, curElem)=>{
//     if(accum[curElem.age]){
//         // accum[curElem.age] = ++accum[curElem.age]; //for Count
//         accum[curElem.age].push(curElem); //for Record
//     } 
//     else{
//         // accum[curElem.age] = 1;  //for Count
//         accum[curElem.age] = [curElem]; //for Record
//     }
//     return accum
// },{})

// console.log(newRecord);

// ================================*****************====================

//Display the first name of employee the age is lessthan 26


// const user=[
//     {fname:"Diwan",lname:"Zende",age:25},
//     {fname:"Rawan",lname:"Londhe",age:23},
//     {fname:"Sawan",lname:"Shende",age:28},
//     {fname:"Jawan",lname:"Bhonde",age:23},
// ]

/*   Using a chaining method   */
// const newData= user.filter((item)=> item.age< 26).map((item)=>item.fname)

// const newData=user.reduce((accum,currEle)=>{
//     if(currEle.age < 26){
//         accum.push(currEle.fname)
//     }
//     return accum
// },[])

// console.log(newData);

// ==============================****************************===================================
// display all reacord of given array of object
// let records = [
//     { id: 1, name: 'Record 1' },
//     { id: 2, name: 'Record 2' },
//     { id: 3, name: 'Record 3' },
//     { id: 4, name: 'Record 4' },
//   ];

// const newArr=records;
// console.log(newArr);

// Delete record array of object in specific id

// let records = [
//     { id: 1, name: 'Record 1' },
//     { id: 2, name: 'Record 2' },
//     { id: 3, name: 'Record 3' },
//     { id: 4, name: 'Record 4' },
//   ];

//   // ID of the record you want to delete
//   let idToDelete = 2;

//   let filteredRecords = records.filter(record => record.id !== idToDelete);

//   console.log(filteredRecords);


// Sample array of objects Update specific id record
// let records = [
//     { id: 1, name: 'Record 1' },
//     { id: 2, name: 'Record 2' },
//     { id: 3, name: 'Record 3' },
//     { id: 4, name: 'Record 4' },
// ];

// let idToUpdate = 2;

// let recordIndex = records.findIndex(record => record.id === idToUpdate);

// if (recordIndex !== -1) {
//     // Update the record
//     records[recordIndex].name = 'Updated Record';
// }

// console.log(records);

// Add new object in an array

// const arr=[
//     {id:1, name:"Pawan"},
//     {id:2, name:"Rawan"},
//     {id:3, name:"Sawan"},
//     {id:4, name:"Jawan"}
//   ]

//   const newObj= {id:5,name:"Juned"}
//   arr.push(newObj)
//   console.log(arr);

// display the last record in an array of objects,

// const arr = [
//     { id: 1, name: "Pawan" },
//     { id: 2, name: "Rawan" },
//     { id: 3, name: "Sawan" },
//     { id: 4, name: "Jawan" }
//   ];

//   // Displaying the last record
//   const lastRecord = arr[arr.length - 1];
//   console.log(lastRecord);



// display specific id record


// const arr = [
//     { id: 1, name: "Pawan" },
//     { id: 2, name: "Rawan" },
//     { id: 3, name: "Sawan" },
//     { id: 4, name: "Jawan" }
//   ];

//   // Search for the record with ID 3
// //   const getId=3
//   const record = arr.find(item => item.id === getId);

//   console.log(record);

// I want to separate the numbers and characters from the given array
// const newAr=['A', 1,'b',22,33,43,'c','d','E'] 

// const newArr= ['A', 1, 'b', 22, 33, 43, 'c', 'd', 'E'];

// const numArr=[]
// const characterArr=[]

// for( const item of newArr){
//   if(typeof item==='number'){
//     numArr.push(item)
//   }
//   if(typeof item === 'string'){
//     characterArr.push(item)
//   }
// }
// console.log("number",numArr)
// console.log("character",characterArr)

// ===============================*********************===========================
//Second largest element in an array

// const arr = [12, 35, 1, 10, 34, 1];

// let firstLargest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > firstLargest) {
//     secondLargest = firstLargest;
//     firstLargest = arr[i];
//   } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
//     secondLargest = arr[i];
//   }
// }

// console.log("Second largest element:", secondLargest);


//Second largest element in an array using sort function

// const arr = [12, 35, 1, 10, 34, 1];

// // Sort the array in descending order
// arr.sort((a, b) => b - a);

// // The second largest element is at index 1
// const secondLargest = arr[1];

// console.log(secondLargest); // Output: 34

// ===========================********************************===========================

// addition of this each function arguments (currying technique) // add(1)(2)(3)(4)(5)()
// logic first
// function addition(a){
//     return function(b){
//         if(b) return addition(a+b);
//         return a
//     }
// }
// let res= addition(3)(2)(1)(5)()
// console.log(res)


// logic second 
// function add(x) {
//   let sum = x;

//   function addNext(y) {
//     if (y === undefined) {
//       return sum;
//     }
//     sum += y;
//     return addNext;
//   }

//   return addNext;
// }

// const result = add(1)(2)(3)(4)(5)(); // Calling it with an empty parenthesis computes the sum
// console.log(result); // Output: 15
// ===============================************************==========================

//flatten this array [1, [2, [3, [4, 5]]]];

// function flattenArray(arr) {
//     let flattened = [];

//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         flattened = flattened.concat(flattenArray(arr[i]));
//       } else {
//         flattened.push(arr[i]);
//       }
//     }

//     return flattened;
//   }

//   const nestedArray = [1, [2, [3, [4, 5]]]];
//   const oneDimensionalArray = flattenArray(nestedArray);

//   console.log(oneDimensionalArray); // [1, 2, 3, 4, 5]

// second logic of fatten array
// let arrayNumberList = [1, [2, 3, 4], 5, 6, [7, 8], [9, 0]];
// let res = [];
// for (let i=0; i<arrayNumberList.length;i++){
//     if(Array.isArray(arrayNumberList[i])){
//         for(let j=0;j<arrayNumberList[i].length;j++){
//             res.push(arrayNumberList[i][j])
//         }
//     }else{
//         res.push(arrayNumberList[i])
//     }
// }
// console.log(res)
// ====================****************=========================

// currying Program addition of this function multiple arguments==> sum (1)(2)(3)
// function sum(no1) {
//   return function (no2) {
//     return function (no3) {
//       return no1 + no2 + no3
//     }
//   }
// }

// const newRes = sum(1)(2)(3);

// console.log(newRes); // This will log 6 to the console


// another currying program addition of this function arguments with empty paranthesis
//  add(1)(2)(3)(4)(5)();

// function add(A){
//   let sum=A;
//   function checkNext(Y){
//     if(Y === undefined){
//       return sum
//     }
//     sum +=Y;
//     return checkNext
//   }
// return checkNext
// }

// const result = add(1)(2)(3)(4)(5)();

// console.log(result);


// write a program to display a element that sum is given number

// const arr=[8,10,6,9,5,7,1,4,2,3]

// const target= 17

// for (let i=0 ; i<arr.length; i++){
//     for(let j=i+1;j<arr.length; j++){
//         if(arr[i] +arr[j] == target){
//             console.log(arr[i],arr[j])
//         }
//     }
// }

//display the duplicate value from an given array
// const preArr=[1,3,4,2,4,5,3,7,5,8]

// // let result=preArr.filter((elm,index,arr)=>arr.indexOf(elm)!==index)//for only return repeated value return
// let result=[...new Set(preArr)]// for only return single value
// // console.log(result)
// ==================================================
// duplicate number count display/ display number and their duplicate count display
// let array = [1,2,3,2,4,2,2,5,2];
// let result=array.reduce((curEle,accum)=>(curEle[accum]=(curEle[accum]||0)+1,curEle),{})

// console.log(result)
// =======================================================
//factorial number  program

// function factorialIterative(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   }
  
//   const resultIterative = factorialIterative(3);
//   console.log(`The factorial of  (iterative) is: ${resultIterative}`);
  


// const str=prompt("enter name ")
 
// if(str=='a'|| str=='e' || str=='i' || str=='o'|| str=='u'){
//     console.log(`(${str})`)
// }


// interview 

// Palash Pal16:13
// 123
// 321
// Palash Pal16:22
// var x = 3;
// var y = "3";
// var z= x + y
// 6
// Palash Pal16:24
// addArrays([2,3,4],[6,4,9],[34,6,4])
// [2, 3, 4, 6, 4, 9, 34, 6, 4]
// Palash Pal16:33
// letterCount("Connect",'c')
// Palash Pal16:50
// isNaN("Hello");
//  Input: str_a = "PYnative29@#8496"
// // Output: Sum: 38, Average: 6.333333333333333

// function calculateSumAndAverage(str) {
//     let sum = 0;
//     let count = 0;
  
//     for (let i = 0; i < str.length; i++) {
//       const currentChar = parseInt(str[i], 10);
  
//       if (!isNaN(currentChar)) {
//         sum += currentChar;
//         count++;
//       }
//     }
  
//     const average = count > 0 ? sum / count : 0;
  
//     return { sum, average };
//   }
  
//   const str_a = "PYnative29@#8496";
//   const result = calculateSumAndAverage(str_a);
  
//   console.log("Sum:", result.sum);
//   console.log("Average:", result.average);
  
// ==============================******************========================================
// CRUD Operations with Local Storage

// import React, { useState, useEffect } from 'react';

// export default function App() {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   useEffect(() => {
//     // Load items from local storage on component mount
//     const storedItems = JSON.parse(localStorage.getItem('items')) || [];
//     setItems(storedItems);
//   }, []);

//   useEffect(() => {
//     // Save items to local storage whenever items state changes
//     localStorage.setItem('items', JSON.stringify(items));
//   }, [items]);

//   const handleAddItem = () => {
//     if (inputValue.trim() !== '') {
//       setItems([...items, inputValue]);
//       setInputValue('');
//     }
//   };

//   const handleDeleteItem = (index) => {
//     setItems(items.filter((item, i) => i !== index));
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button onClick={handleAddItem}>Add</button>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item}
//             <button onClick={() => handleDeleteItem(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// ==========================**********************=====================
// above example same but adding checkbox

// import React, { useState, useEffect } from 'react';

// function CrudComponent() {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   useEffect(() => {
//     const storedItems = JSON.parse(localStorage.getItem('items')) || [];
//     setItems(storedItems);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('items', JSON.stringify(items));
//   }, [items]);

//   const handleAddItem = () => {
//     if (inputValue.trim() !== '') {
//       setItems([...items, { text: inputValue, checked: false }]);
//       setInputValue('');
//     }
//   };

//   const handleDeleteItem = (index) => {
//     setItems(items.filter((item, i) => i !== index));
//   };

//   const handleCheckboxChange = (index) => {
//     const updatedItems = [...items];
//     updatedItems[index].checked = !updatedItems[index].checked;
//     setItems(updatedItems);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button onClick={handleAddItem}>Add</button>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             <input
//               type="checkbox"
//               checked={item.checked}
//               onChange={() => handleCheckboxChange(index)}
//             />
//             {item.text}
//             <button onClick={() => handleDeleteItem(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CrudComponent;

// ================================******************==================
// the program same as above program just add delete all button

// import React, { useState, useEffect } from 'react';

// function CrudComponent() {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   useEffect(() => {
//     // Load items from local storage on component mount
//     const storedItems = JSON.parse(localStorage.getItem('items')) || [];
//     setItems(storedItems);
//   }, []);

//   useEffect(() => {
//     // Save items to local storage whenever items state changes
//     localStorage.setItem('items', JSON.stringify(items));
//   }, [items]);

//   const handleAddItem = () => {
//     if (inputValue.trim() !== '') {
//       setItems([...items, { value: inputValue, checked: false }]);
//       setInputValue('');
//     }
//   };

//   const handleDeleteItem = (index) => {
//     setItems(items.filter((item, i) => i !== index));
//   };

//   const handleDeleteAll = () => {
//     setItems([]);
//   };

//   const handleCheckboxChange = (index) => {
//     setItems(
//       items.map((item, i) =>
//         i === index ? { ...item, checked: !item.checked } : item
//       )
//     );
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button onClick={handleAddItem}>Add</button>
//       <button onClick={handleDeleteAll}>Delete All</button>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             <input
//               type="checkbox"
//               checked={item.checked}
//               onChange={() => handleCheckboxChange(index)}
//             />
//             {item.value}
//             <button onClick={() => handleDeleteItem(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CrudComponent;


// ===============*************************===========================

 /*To achieve the desired output where all non-zero elements are moved to the beginning of the array 
 while maintaining their relative order, and all zeroes are moved to the end of the array*/

// const inputArray1 = [0, 2, 0, 1, 3, 0, 4];

// const rearrangeArray = (arr) => {
//   const nonZeroElements = arr.filter(num => num !== 0);
//   const zeroCount = arr.length - nonZeroElements.length;
//   return [...nonZeroElements, ...Array(zeroCount).fill(0)];
// };

// const outputArray = rearrangeArray(inputArray1);
// console.log(outputArray); // Output: [2, 1, 3, 4, 0, 0, 0]


// =====================*****************==========================

//can recursively iterate over the object and convert each key-value pair into an array.

// const obj = {
//   key1: 'value1',
//   key2: {
//     key3: 'value3'
//   }
// };

// const objectToArray = (obj) => {
//   return Object.entries(obj).map(([key, value]) => {
//     if (typeof value === 'object' && value !== null) {
//       return [key, objectToArray(value)];
//     }
//     return [key, value];
//   });
// };

// const resultArray = objectToArray(obj);
// console.log(resultArray); // Output: [ [ 'key1', 'value1' ], [ 'key2', [ [ 'key3', 'value3' ] ] ] ]


// ======================****************=================*****************=====================
// create a form that caching errors (form validation without third party library)

import { useState } from 'react';

function App() {
  const [formvalues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [formerror, setFormError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formvalues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formvalues);
    setFormError(errors);

    // Check if there are no errors before submitting the form
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted successfully:', formvalues);
    } else {
      console.log('Form has errors:', errors);
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add data </h2>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formvalues.email}
            onChange={handleChange}
          />
          <p>{formerror.email}</p>
        </div>
        <br />
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formvalues.password}
            onChange={handleChange}
          />
          <p>{formerror.password}</p>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;


// ========================================================
// use this api and search record

// import { useState, useEffect } from 'react';

// function App() {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => {
//         setUsers(data);
//         setSearchResults(data); // Initialize search results with all users
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     const filteredUsers = users.filter(user => {
//       return user.name.toLowerCase().includes(searchTerm.toLowerCase());
//     });
//     setSearchResults(filteredUsers);
//   };

//   return (
//     <div>
//       <h1>User Search</h1>
//       <input
//         type="text"
//         placeholder="Search by name..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <ul>
//         {searchResults.map(user => (
//           <li key={user.id}>
//             <p>Name: {user.name}</p>
//             <p>Email: {user.email}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
// ==============================================================
//calculator app

// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [data, setData] = useState('');
//   const [result, setResult] = useState('');

//   const handleChange = (e) => {
//     setData(e.target.value);
//   };

//   const handleClick = (value) => {
//     if (value === '=') {
//       setResult(eval(data));
//     } else if (value === 'C') {
//       setData('');
//       setResult('');
//     } else {
//       setData(data + value);
//     }
//   };

//   return (
//     <>
//       <h2>Calculate</h2>
//       <p>{result}</p>
//       <input type="text" name="data" value={data} onChange={handleChange} />
//       <br />
//       <button onClick={() => handleClick('7')}>7</button>
//       <button onClick={() => handleClick('8')}>8</button>
//       <button onClick={() => handleClick('9')}>9</button>
//       <br />
//       <button onClick={() => handleClick('4')}>4</button>
//       <button onClick={() => handleClick('5')}>5</button>
//       <button onClick={() => handleClick('6')}>6</button>
//       <br />
//       <button onClick={() => handleClick('1')}>1</button>
//       <button onClick={() => handleClick('2')}>2</button>
//       <button onClick={() => handleClick('3')}>3</button>
//       <button onClick={() => handleClick('0')}>0</button>
//       <br />
//       <button onClick={() => handleClick('+')}>Add</button>
//       <button onClick={() => handleClick('-')}>Sub</button>
//       <button onClick={() => handleClick('*')}>Mul</button>
//       <button onClick={() => handleClick('/')}>Div</button>
//       <button onClick={() => handleClick('=')}>Calculate</button>
//     </>
//   );
// }

// export default App;

// full stack interview

// What is npm? How do you use it?


// Explain the difference between setImmediate() and setTimeout() in Node.js.


// Explain what middleware is in the context of Node.js and Express.js.


// How do you handle environment variables in Node.js?


// Explain the difference between the require() function and the import statement in Node.js.


// What are closures in JavaScript and how are they relevant in Node.js development?


// What is the purpose of the __dirname and __filename variables in Node.js?


// How do you debug Node.js applications?


// Explain how you can handle memory leaks in a Node.js application.
// Explain the concept of the Event Emitter in Node.js and provide a custom implementation.

//interview question======================================

// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// //  => [1,2,3,1,1,2,2,3,3]

// // const arr= [1,1,1,2,2,2,3,3,3] O/P= => [1,2,3,1,1,2,2,3,3]

//Guess the Output
// var a = 10;
// function abc() {
//   console.log(a);
//   let a = 5;
// }
// abc()

//Guess the output
// var a = 10;
// function abc() {
//   if(true) {
//     console.log(a);
//     var a = 5;
//   }
// }
// abc()

// write a closure example
// function myParent(){
//     var a=10;
//     function myChild(){
//         var b=20
//         var res=0
//       return  res= a+b
//     }
//     myChild()
// }
// myParent()
// =============================
// how to print obj2 value name using getName method of obj
const obj = {
  name: "pawan",
  getName: function() {
    console.log(this.name);
  }
};

const obj2 = {
  name: "pawan salve"
};

// Using call
obj.getName.call(obj2); // Output: pawan salve

// Using apply
obj.getName.apply(obj2); // Output: pawan salve






































