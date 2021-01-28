var button = document.querySelector('.btn');
var background = document.querySelector('.body');
var i  = 0;



button.addEventListener('click', function(){

  if(i === 0){
      i = 1;
    }
    
    
    background.classList.add('body-' + i++);
    console.log(i);
});