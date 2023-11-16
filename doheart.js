const heart = document.getElementById('heart');

document.addEventListener('keydown', function(event){
   if(event.code === 'space' || event.code === 'Enter'){
    heart.classList.toggle('pulse');
   } 
});
    