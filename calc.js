let entryvalue = 0;
let store = 0;
const plus = document.querySelector("#plus");
const division = document.querySelector("#divide");
const multiplication = document.querySelector("#x");
const point = document.querySelector("#point");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const result = document.querySelector("#result");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const minus = document.querySelector("#minus");
const scentry = document.querySelector(".scentry");
const scresult = document.querySelector(".result");

plus.addEventListener("click", ()=>{
    if(scentry.textContent.at(-1)!== "-" && scentry.textContent.at(-1)!== "+" && scentry.textContent.at(-1)!== "*" && scentry.textContent.at(-1)!== "÷"){
       
        store = store + Number(scentry.textContent);
        scresult.textContent= scresult.textContent+ scentry.textContent +"+";
        scentry.textContent = "";

        
    }

})
division.addEventListener("click",()=>{
})
multiplication.addEventListener("click", ()=>{
})
point.addEventListener("click", ()=>{
})
minus.addEventListener("click", ()=>{
    if(scentry.textContent.at(-1)!== "-" && scentry.textContent.at(-1)!== "+" && scentry.textContent.at(-1)!== "*" && scentry.textContent.at(-1)!== "÷"){
        scentry.textContent = scentry.textContent + "-";
    }
})
result.addEventListener("click", ()=>{
    if(scresult.textContent.at(-1) === "+"){
        store += Number(scentry.textContent);
        scresult.textContent = "";
    }
    scentry.textContent = store;
    store = 0;
})
one.addEventListener("click", ()=>{
        scentry.textContent = scentry.textContent + "1";  
})
two.addEventListener("click", ()=>{
    scentry.textContent = scentry.textContent + "2";  
})
three.addEventListener("click", ()=>{
    scentry.textContent = scentry.textContent + "3";  
})
four.addEventListener("click", ()=>{
    scentry.textContent = scentry.textContent + "4";  
})
five.addEventListener("click", ()=>{
    scentry.textContent = scentry.textContent + "5";  
})
six.addEventListener("click", ()=>{  
    scentry.textContent = scentry.textContent + "6";  
})
seven.addEventListener("click", ()=>{
    scentry.textContent = scentry.textContent + "7";  
})
eight.addEventListener("click", ()=>{
    scentry.textContent = scentry.textContent + "8";  
})
nine.addEventListener("click", ()=>{
    scentry.textContent = scentry.textContent + "9";  
})
zero.addEventListener("click", ()=>{
    scentry.textContent = scentry.textContent + "0";  
})

