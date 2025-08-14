let coffee = document.querySelector(".coffee_img");
console.log(coffee.offsetTop);   // coffee img Y값 위치 찾기 

window.addEventListener("scroll",function(){
    let been = document.querySelector(".been_img");
    if(window.scrollY > 940){
    been.style.display = "none";
    }else{
        been.style.display = "block";
    }
})