let slider = document.querySelector("#slider");
const increaseBtn = document.querySelector(".fa-plus");
const decreaseBtn = document.querySelector(".fa-minus");

//setting the value of the range slider to 0
 slider.value = 0 ;

//creating the click event on the increase and decrease button
increaseBtn.addEventListener('click',()=>{
    increaseSlide()   
})

decreaseBtn.addEventListener('click',()=>{
    decreaseSlide()
})


//if slider is greater or equal to 0 increase it
function increaseSlide(){
    if(slider.value >= 0){
        slider.value ++
    }   
}

//if slider is less or equal to 100 decrease it 
function decreaseSlide(){
    if(slider.value <= 100){
        slider.value -- 
    }   
}