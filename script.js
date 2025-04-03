const body=document.getElementsByTagName("body")[0]
// const rang=document.getElementById("rang");

// btn.addEventListener("mouseenter",()=>{
    //     body.style.backgroundColor="black";
    // })
    // rang.addEventListener("input",()=>{
        //     body.style.backgroundColor=rang.value;
        // })
        
     const input1=document.getElementById("input1");
     const btn=document.getElementById("send");
     const son=document.getElementById("son");
     const input=document.getElementById("input");
     const minus=document.getElementById("minus");
     const plus=document.getElementById("plus");
     body.style.backgroundColor="black";
     son.style.color="white";

     btn.addEventListener("click",()=>{
        son.textContent=input.value;
     })
     plus.addEventListener("click",()=>{
        son.textContent=+son.textContent+1;
     })
     minus.addEventListener("click",()=>{
        son.textContent=+son.textContent-1;
     })
     input1.addEventListener("input",()=>{
       h1.style.backgroundColor=input1.value;
     })