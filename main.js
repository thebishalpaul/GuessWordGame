let btn=document.querySelector(".btn");
let btn2=document.querySelector(".btn2");
let inputBox=document.querySelector("input");
let Q=document.querySelector(".msg");
let result=document.querySelector(".result");
const score = document.querySelector('#score');
let wordsArr=["Youtube","Instagram","Facebook"];
btn.addEventListener('click',removeHidden);
// console.log(inputBox);

let play=false;
let word="";
let count=0;
function removeHidden() {
  if(!play){
    play=true;
    inputBox.classList.remove("hidden");
    btn2.classList.remove("hidden");
    btn.innerHTML="Next";
    word= createWords();
    let ranWords=scrambleWords(word.split(""));
    Q.innerHTML=ranWords.join("");
    displayScore();
  }
else{
    if(inputBox.value==word){
      play=false;
      result.innerHTML="<span style='color: rgb(0, 73, 6);'> Correct  </span>";
      count++;
      setTimeout(()=>{
        result.innerHTML="";
      },1000);

      inputBox.value="";
      removeHidden();
    }
      else
      { 
        play=true;
        result.innerHTML="Incorrect.<br> Try Again";
        setTimeout(()=>{
          result.innerHTML="";
        },1000);
   }
 }
}
let displayScore=()=>{
    score.innerHTML=`Score: ${count}`;
}
let createWords=()=>{
    let i=Math.floor(Math.random()*wordsArr.length);
     return wordsArr[i];
}


let scrambleWords=(arr)=>{
  for(let i=arr.length-1;i>=0;i--){
    let temp=arr[i];
    // console.log(temp);
    let j=Math.floor(Math.random()*arr.length);
    // console.log(i);
    // console.log("j:"+j);
    arr[i]=arr[j];
    arr[j]=temp;
  }
     return arr;
}

btn2.addEventListener('click',function(){
  window.location.reload();
})