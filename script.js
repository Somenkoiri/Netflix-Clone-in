let main = document.querySelector(".text-all")
let menupag= document.querySelector(".menupa")
let menu =document.querySelector(".navber i")

let fig = 0;

menu.addEventListener("click", function(){

    if(fig == 0){

        menupag.style.display= "block"
        fig = 1;
   
    }
    else{
        menupag.style.display= "none"
        fig = 0;
    }
})

main.addEventListener("click", function(){

    menupag.style.display= "none"
   

})