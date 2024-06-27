const mouseStalker = document.querySelector(".mouse-stalker") ;

document.addEventListener('mousemove',function(event){
  mouseStalker.style.transform = 'translate('+ event.clientX+'px,'+ event.clientY +'px)'
})