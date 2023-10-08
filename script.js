'use strict';


const buttons =  document.querySelectorAll('.buttons');
const modal =  document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
console.log(buttons);
const closebtn = document.querySelector('.close-modal');


function openModal(className){
    className.addEventListener('click',function(){
        modal.classList.remove('hidden'); 
        overlay.classList.remove('hidden');
            });
}



const closeModel = (className)=>{
    className.addEventListener('click',()=>{
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    })

}



for( let i = 0 ;  i < buttons.length ; i++){
openModal(buttons[i]);
}





closeModel(closebtn);
closeModel(overlay);




document.addEventListener('keydown',function(e){
    console.log(e); //to get object of pressed key info
    console.log(e.key); // name of pressed key


    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
              modal.classList.add('hidden');
        overlay.classList.add('hidden');
  
    }
})   
