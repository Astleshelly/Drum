
var a;
function click(val){
    
    switch (val) {
        
     case 'w':
         a=new Audio('./crash.mp3');
         
         break;
     case 'a':
         a=new Audio('./kick-bass.mp3');
         break;
     case 's':
         a=new Audio('./snare.mp3');
         break;
     case 'd':
        var a=new Audio('./tom-1.mp3');
         break;
     case 'j':
         a=new Audio('./tom-2.mp3');
         break;
     case 'k':
         a=new Audio('./tom-3.mp3');
         break;
     case 'l':
         a=new Audio('./tom-4.mp3');
         break;    
     default:
 
         break;
    }
     a.play();
 }


for (var i=0;i<7;i++){
document.querySelectorAll('button')[i].addEventListener('click',function(){
 click(this.innerHTML);
 ani(this.innerHTML);
});
    
}




document.addEventListener('keydown',function(Event) {
    click(Event.key);
    ani(Event.key);
   
});


function ani(event){
   var ab=document.querySelector('.'+event);
    ab.classList.add('pressed');

    setTimeout(()=>{ab.classList.remove('pressed');},50);
}



