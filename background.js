let input=document.getElementById("color")   
let input2=document.getElementById("gradient")


 function colorChange(z){
    console.log(z)
    if(z.key==="Enter"){
        document.body.style.backgroundColor=input.value
    }
 }

 function gradientApply(z){
    console.log(z)
    if(z.key==="Enter"){
    document.body.style.background=`linear-gradient(${input2.value})`
   }
 }

