//first pro

// let myName="Pawan"

// document.getElementById("p1").innerHTML="Hello " + myName;

// document.getElementById("submitbtn").onclick= function(){
//     const myBox=document.getElementById("myCheckBox")
//     if(myBox.checked){
//         console.log("Subscibed");
//     }
//     else{
//         console.log("Not Subscibed");

//     }
// }


//second pro

// let age=90

// switch(true){
//     case age >105:
//     console.log("you did");
//     break;
//     case age >80:
//     console.log("you Not did");
//     break;
// }

//third pro

// let userName=""

// while(userName== "" || userName == null){
//     userName=window.prompt("Enter User Name")
// }

// // console.log("Good",userName);
// alert("Good name "+userName)

//4th pro
// debugger
// var mynum = 20;
// var attempts = 0;

// while (attempts < 3) {
//     let no = prompt("Enter number");

//     if (parseInt(no) === mynum) {
//         alert("You entered the correct number");
//         break;
//     } else {
//         attempts++;
//         if (attempts < 3) {
//             alert("Incorrect number. Please try again. Attempts remaining: " + (3 - attempts));
//         } else {
//             alert("You've reached the maximum number of attempts. The correct number was " + mynum);
//         }
//     }
// }

//5th pro

// const myData=[
//     {name:"Roshan",gender:"male"},
//     {name:"Srawani",gender:"female"},
// ]

// let res=myData.map(item=>{
//     if(item.gender ==="male"){
// return {...item ,name:"Mr."+item.name}
//     }
//     if(item.gender ==="female"){
// return {...item ,name:"Ms."+item.name}
//     }
// })

// console.log(res)

//6th pro
// create a userName by using users full name condition is at the position start at @ sign and end with length of username

// let userName=prompt("enter full name")
// userName=userName.replace(/\s/g, '').toLowerCase();
// const res="@" + userName +userName.length
// console.log(res);

// 8th pro

// display 10 % discount on array each element

// const myArr=[360,532,700,453,500,400]

// for(let i=0; i< myArr.length; i++){
//     let disc= myArr[i] / 10
//     myArr[i] -= disc;
// }
// console.log(myArr);

//9th pro
// display vowels in given string

// const strg = "Pawan";
// for (let currentChar of strg) {
//     if (currentChar === "a" || currentChar === "e" || currentChar === "i" || currentChar === "o" || currentChar === "u") {
//         console.log(`Character '${currentChar}' is a vowel`);
//     } else {
//         console.log(`Character '${currentChar}' is not a vowel`);
//     }
// }

// 10th pro
// display vowels count from given string

// const strg = "Pawan";
// let count=0
// for (let currentChar of strg) {
//     if (currentChar === "a" || currentChar === "e" || currentChar === "i" || currentChar === "o" || currentChar === "u") {
//     count++;
//     }
// }
// console.log(count);

// 11th Pro 
// write a program take number from user and display array like enter no 5 o/p is [1,2,3,4,5]

// let no=prompt("enter number ")
// let res=[]
// for (let i=1; i<=no; i++){
//     res[i-1]=i
// }
// console.log(res);

// 12th pro
// disply values ising keys

// let userData={
//     name:"Rocky",
//     age:26,
//     city:"Gorgiea"
// }

// alert(userData.name)

// 13th pro
// access h1 and add/ Concat new message 

// let h1=document.querySelector("h1")
// h1.innerText=h1.innerText + " The world of javascript"
// console.dir(h1.innerText);

// 14th pro
// define 3 div and print unique value with same message

// let alldiv=document.querySelectorAll(".box")
// let ind=1;
// for( let no of alldiv){
//     no.innerText=`print the diffrent box as unique value ${ind}`
//     ind ++;
// }

// 15th pro
// without writing HTML create button using javascript

// let newbtn=document.createElement("button")
// newbtn.innerText="Submit"
// newbtn.style.color='white'
// newbtn.style.backgroundColor='blue'
// document.querySelector("body").prepend(newbtn)

//16th pro tic tac toe

let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector("#btn")
let newGameBtn= document.querySelector("#new_btn")
let msgContainer=document.querySelector(`.msg-container .hide`)
let msg=document.querySelector("#msg") 


let turnO=true

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach(element => {
    element.addEventListener("click",()=>{
        console.log("box clicked");
        if(turnO){
            element.innerText="O";
            turnO=false;
        }else{
            element.innerText="x";
            turnO=true;
        }
        element.disabled=true;
        checkWinner();
    })
});

const showWinner=(Winner)=>{
msg.innerText= `Congratulation...!${Winner}`
msgContainer.classList.remove("hide")
}

const checkWinner=()=>{
    for(let pattern of winPattern){
        let position1_Value=boxes[pattern[0]].innerText;
        let position2_Value=boxes[pattern[1]].innerText;
        let position3_Value=boxes[pattern[2]].innerText;

        if(position1_Value !="" && position2_Value !="" && position3_Value !=""){
            if(position1_Value === position2_Value && position2_Value === position3_Value){
                console.log("Winner",position1_Value);
                showWinner(position1_Value);
            }
        }
    }
}
