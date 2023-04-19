//我自己寫的猜數字
// let right=50;
// button.addEventListener("click",function(){ //增加事件的監聽器
    
//     if(input.value < right && input.value >= 1){
//         console.log(1);
//         const num=input.value;
//         text1.innerText=num;
//     }else if(input.value > right){
//         console.log(2);
//         const num=input.value;
//         text2.innerText=num;
//     }
//     if(input.value === right){ 
//         text.innerHTML="<h2 >答對了!!</h2>";
//     }
// }); 


//老師打的
const btn=document.querySelector("#btn")
const input=document.querySelector("#input");
const min=document.querySelector("#min");
const max=document.querySelector("#max");
const numArea=document.querySelector(".numInfo");

const answer=Math.floor(Math.random()*100+1);
console.log(answer);
let minNum=1;
let maxNum=100;

btn.addEventListener("click",function(){
let guess= +input.value;
input.value=null;

if(guess<minNum || guess>maxNum){
    alert("看清楚~~!不要亂輸入拉")
    return
}
if(guess<answer){
    minNum=guess;
    min.innerText=guess;
}
if(guess>answer){
    maxNum=guess;
    max.innerText=guess;
}
if(guess === answer){
    alert("終於答對拉~!可以有抱抱一個~!")
    numArea.innerHTML=`<h1>"答案是"${answer}，宗聖你猜幾次XD</h1>`
}
})



