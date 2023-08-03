  Given an array of integers (nums), your task is to find the single element that appears only 
  once in the array. All the other elements appear twice in the array.


  function singleNumber(nums) {
      let result = 0
      for (const num of nums) {
          result ^= num
      }
      return result
  }
   const nums=[1,1,2]
   console.log(singleNumber (nums));

  ****************************************************************************************

  Reverse the given array with function const arr = [56, 2, 4, 9, 8, 23, 45, 12, 67, 12, 87, 8, 9, 35, 37];

  const arr = [56, 2, 4, 9, 8, 23, 45, 12, 67, 12, 87, 8, 9, 35, 37];
  arr.reverse();

  console.log(arr);

  Reverse the given array withOut any function const arr = [56, 2, 4, 9, 8, 23, 45, 12, 67, 12, 87, 8, 9, 35, 37];
  const arr = [56, 2, 4, 9, 8, 23, 45, 12, 67, 12, 87, 8, 9, 35, 37];
  var newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
     newArr.push(arr[i])
   }

  ********************************************************************************************

   Reverse the given array without using builtin function const arr = [56, 2, 4, 9, 8, 23, 45, 12, 67, 12, 87, 8, 9, 35, 37];

  const arr = [56, 2, 4, 9, 8, 23, 45, 12, 67, 12, 87, 8, 9, 35, 37];
  const length = arr.length;
  const middleIndex = Math.floor(length / 2);

  for (let i = 0; i < middleIndex; i++) {
    const temp = arr[i];
    arr[i] = arr[length - 1 - i];
    arr[length - 1 - i] = temp;
  }

  console.log(arr);

  *********************************************************************************************

  Reverse string without change a position
  function reverseString(str) {
      var words = str.split(' ');
      var reversedWords = words.reverse();
      var reversedString = reversedWords.join(' ');
      var reversed = '';
      for (var i = reversedString.length - 1; i >= 0; i--) {
        reversed += reversedString.charAt(i);
      }
      return reversed;
    }

    var input = 'Hi! This is Javascript';
    var output = reverseString(input);
    console.log(output);

  Reverse string without change a position without inside function

  var input = 'Hi! This is Javascript';
  var words = input.split(' ');
  var reversedWords = words.reverse();
  var reversedString = reversedWords.join(' ');
  var reversed = '';
  for (var i = reversedString.length - 1; i >= 0; i--) {
    reversed += reversedString[i];
  }
  console.log(reversed);

  ++++++++++++++++=====================+++++++++++++++++++++++++++++++++++++++++

  const obj= [{
    name:"pawan",
    age:25,
    mob:85647383465
  }]

  for(let res of obj){
    console.log(res ,obj[res]);
  }

  =================================================**************************=-================

  Write a program to enter number up to right number not enter

  let no = 55;
  let i;

  while (i !== no) {
    i = prompt("Enter number");  use this on console only
  }

  console.log("Number match");
  ===============================***********************============================

 Replace a character 
  const friend ="deepak"

  const newString=friend.replace("p","P")

  console.log(newString);


  const arr=[1,2,3,4,5,6]
  console.log(arr.length);
    delete arr[0]
  console.log(arr.length);
  arr.pop()
  console.log(arr.length);

  const c=arr.join(" and ")
  console.log(c);

  const arr2=["banana", "Apple",'Greps']
  const arr2=[1,2,3,4,5,6]
  arr2.forEach ((elem)=>{console.log(elem)})


  const arr1=[221,55,121,44,35]

  arr1.sort()
  arr1.reverse()
  console.log(arr1);


  const arr12=[221,55,121,44,35]

  arr12.splice(2,2,324,432)

  console.log(arr12);


  const data = {
      name:"pawan",
      age:25,
      mob:6536686233
  }

  for (let elem of data){
      console.log(elem);
  }


  let arr =[22,14,67]

  let newArr=arr.map((value,index,arr)=>{
      return (value + value);
  })
  console.log(newArr);

  let arr1 =[22,2,101,12,43]

  let b=arr1.filter((elem)=>{
      return elem>22
  })
  console.log(b);


  const arr=[22,32,53,534,354,34]
  arr.push(22)

  console.log(arr);

  ==============================***************==================

 guess randome number game

  let no = Math.random() * 100;
  no = Number.parseInt(no)
  console.log(no);
  let num;
  let score = 100
  while (num != no) {
      score = score - 1
      num = prompt("Ener Number")
      if (num === no) {
          console.log("Congrats You guess the Correct Number ");
          console.log(`You guess the actual number ${100 - score} Chances`);
      } else if (num > no && num < 100) {
          console.log("Your number is greater than the actual number");
      }
      else if (num < no && num > 0) {
          console.log("Your number is less than the actual number");
      }
      else {
          console.log("Enter Number between 1 to 100");

      }
  }
  console.log(no);

  ==========================*****************==================
  Age limit for drive ask for ceck again Drive

  let run= true;
  const driveAge =(age)=>{
  return age >= 18 ? true : false;
  }

  while(run){
  let age=prompt("Enter age")
  age=Number.parseInt(age)
  if(age <0){alert("Please Enter Valid age number"); continue;}
  if(driveAge(age)){
      alert("You can Drive");
  }else{
      alert("You can't Drive");
  }
  run=confirm("Are you want to again try..?")
  }


  ========================****************===============
  relocate through direct BOM/DOM 
  let no=prompt("Enter number")
  no=Number.parseInt(no)
  if(no > 4){
      location.href="https: chat.openai.com/?model=text-davinci-002-render-sha"
  }

  ======================***************************======================================
  Higher order and Callback Function

  const a = 10;
  const b = 20;
  const addi = function (a, b) {
    return a + b;
  };
  const sub = function (a, b) {
    return a - b;
  };
  const mult = function (a, b) {
    return a * b;
  };
  const divi = function (a, b) {
    return a / b;
  };

  const calculate = function (addi, a, b) {
    return addi(a, b);
  };

  console.log(calculate(addi, a, b));
  console.log(calculate(sub, a, b));
  console.log(calculate(mult, a, b));
  console.log(calculate(divi, a, b));


 map function work on array

  const arr = [3, 2, 5, 3, 6];

  const newArr = arr.map((item) => {
    return item + item;
  });

  console.log(newArr);
  ===========================================************************=============================
  addition of arrays each element  without using builtin method(reduce)

  const arr = [3, 2, 5, 3, 6];

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  console.log(sum);

 display all first name only
  const user=[
      {fname:"Diwan",lname:"Zende",age:25},
      {fname:"Rawan",lname:"Londhe",age:23},
      {fname:"Sawan",lname:"Shende",age:28},
      {fname:"Jawan",lname:"Bhonde",age:23},
  ]

  user.map((item)=>{
      console.log(item.fname);
  })

 display same age record  and countcount

  const user=[
      {fname:"Diwan",lname:"Zende",age:25},
      {fname:"Rawan",lname:"Londhe",age:23},
      {fname:"Sawan",lname:"Shende",age:28},
      {fname:"Jawan",lname:"Bhonde",age:23},
  ]

  const newRecord= user.reduce((accum, curElem)=>{
      if(accum[curElem.age]){
            accum[curElem.age] = ++accum[curElem.age];  for Count
          accum[curElem.age].push(curElem);  for Record
      } 
      else{
            accum[curElem.age] = 1;   for Count
          accum[curElem.age] = [curElem];  for Record
      }
      return accum
  },{})

  console.log(newRecord);

  ================================*****************====================

 Display the first name of employee the age is 26


  const user=[
      {fname:"Diwan",lname:"Zende",age:25},
      {fname:"Rawan",lname:"Londhe",age:23},
      {fname:"Sawan",lname:"Shende",age:28},
      {fname:"Jawan",lname:"Bhonde",age:23},
  ]

/*   Using a chaining method   */
  const newData= user.filter((item)=> item.age< 26).map((item)=>item.fname)

  const newData=user.reduce((accum,currEle)=>{
      if(currEle.age < 26){
          accum.push(currEle.fname)
      }
      return accum
  },[])

  console.log(newData);

  ==============================****************************===================================
  display all reacord of given array of object
  let records = [
      { id: 1, name: 'Record 1' },
      { id: 2, name: 'Record 2' },
      { id: 3, name: 'Record 3' },
      { id: 4, name: 'Record 4' },
    ];

  const newArr=records;
  console.log(newArr);

  Delete record array of object in specific id

  let records = [
      { id: 1, name: 'Record 1' },
      { id: 2, name: 'Record 2' },
      { id: 3, name: 'Record 3' },
      { id: 4, name: 'Record 4' },
    ];

      ID of the record you want to delete
    let idToDelete = 2;

    let filteredRecords = records.filter(record => record.id !== idToDelete);

    console.log(filteredRecords);


  Sample array of objects Update specific id record
  let records = [
      { id: 1, name: 'Record 1' },
      { id: 2, name: 'Record 2' },
      { id: 3, name: 'Record 3' },
      { id: 4, name: 'Record 4' },
  ];

  let idToUpdate = 2;

  let recordIndex = records.findIndex(record => record.id === idToUpdate);

  if (recordIndex !== -1) {
        Update the record
      records[recordIndex].name = 'Updated Record';
  }

  console.log(records);

  Add new object in an array

  const arr=[
      {id:1, name:"Pawan"},
      {id:2, name:"Rawan"},
      {id:3, name:"Sawan"},
      {id:4, name:"Jawan"}
    ]
   
    const newObj= {id:5,name:"Juned"}
    arr.push(newObj)
    console.log(arr);

  display the last record in an array of objects,

  const arr = [
      { id: 1, name: "Pawan" },
      { id: 2, name: "Rawan" },
      { id: 3, name: "Sawan" },
      { id: 4, name: "Jawan" }
    ];
  
      Displaying the last record
    const lastRecord = arr[arr.length - 1];
    console.log(lastRecord);
  

  display specific id record


  const arr = [
      { id: 1, name: "Pawan" },
      { id: 2, name: "Rawan" },
      { id: 3, name: "Sawan" },
      { id: 4, name: "Jawan" }
    ];
  
      Search for the record with ID 3
      const getId=3
    const record = arr.find(item => item.id === 3);
  
    console.log(record);

  =====================***************************==================================

  Write a program that takes an input number and displays its multiplication table from 1 to 10:


  import React, { useState } from 'react';

  const MultiplicationTable = () => {
    const [number, setNumber] = useState(4);

    const handleNumberChange = (e) => {
      setNumber(Number(e.target.value));
    };

    return (
      <div>
        <h2>Multiplication Table</h2>
        <div>
          <label>
            Enter a number:
            <input type="number" value={number} onChange={handleNumberChange} />
          </label>
        </div>
        <div>
          <h3>Result:</h3>
          <ul>
            {[...Array(10)].map((_, index) => (
              <li key={index}>
                {number} * {index + 1} = {number * (index + 1)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  export default MultiplicationTable;


  ====================************************===============================

  Write a program that includes two input fields for getting input, a button to add the input to a table, and a table to display the data entered:

  import React, { useState } from 'react';

  const TableInput = () => {
      State to store the input values
    const [formData, setFormData] = useState(
      {
        firstName: '',
        lastName: '',
      });

      Function to handle changes in the input fields
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

      State to store the table data
    const [tableData, setTableData] = useState([]);

      Function to handle adding data to the table
    const handleAddToTable = () => {
      if (formData.firstName && formData.lastName) {
        setTableData([...tableData, formData]);
        setFormData(formData);
      }
    };

    return (
      <div>
        <h2>Enter Data</h2>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
        </div>
        <button onClick={handleAddToTable}>Add to Table</button>

        {tableData.length > 0 && (
          <div>
            <h2>Table Data</h2>
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };

  export default TableInput;








































