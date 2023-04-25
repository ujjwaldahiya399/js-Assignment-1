let res = document.getElementsByTagName("h1")[0];
console.log(res)
res.innerText = "hhhh"
function btnPressed() {
    res.innerText = "changed text"
}
let ele = document.getElementsByTagName("h1")[1 ]
ele.style.color = "red"
ele.id = "heading"
function changeDrxn() {
    let box = document.getElementsByTagName("div")[1];
    console.log(box)
    box.style.flexDirection = "column";
}
// function timeer() {
//     let time = new Date();
//     let hours = time.getHours();
//     let minutes = time.getMinutes();
//     let seconds = time.getSeconds();
//     let hoursEle = document.getElementsByTagName("h2")[0];
//     hoursEle.innerTexture = hours;
//     let minEle = document.getElementsByTagName("h2")[1];
//     minEle.innerTexture = minutes;
//     let secondsEle = document.getElementsByTagName("h2")[2];
//     secondsEle.innerTexture = seconds;
// }
let hoursEle = document.getElementsByTagName("h2")[0];
let minEle = document.getElementsByTagName("h2")[1];
let secondsEle = document.getElementsByTagName("h2")[2];

setInterval(function timeer() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    hoursEle.innerText = hours+":";
    minEle.innerText = minutes+":";
    secondsEle.innerText = seconds;
    console.log("workings")
},1000)