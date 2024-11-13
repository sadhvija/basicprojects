
let input2=document.getElementById("bRadius")
let image=document.querySelector("img");

function RadiusChnage(z){
    console.log(z)
        if(z.key === "Enter"){
            image.style.borderRadius=`${input2.value}px`
        }
}