const glass= document.querySelector(".glass")
const bglass= document.querySelector(".first")

const btn= document.querySelector(".btn")
console.log(btn)
btn.addEventListener("click",()=>{console.log("h"); glass.classList.toggle("shadow") 
})
btn.addEventListener("click",()=>{if(btn.innerText==="ON"){
        bglass.style.backgroundColor="yellow"
       
        btn.innerText="OFF"  
    }
    else{
    btn.innerHTML="ON"
    bglass.style.backgroundColor="white"
    
    }

})