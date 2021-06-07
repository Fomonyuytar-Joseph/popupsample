
const popup=document.querySelector('.popup-wrapper');
const close=document.querySelector('.popup-close');
const button=document.querySelector('button');
 button.addEventListener('click',()=>{
     popup.style.display='block';
 });
  close.addEventListener('click',()=>{
      popup.style.display='none';
  }); 
  popup.addEventListener('click',()=>{
    popup.style.display='none';
}); 