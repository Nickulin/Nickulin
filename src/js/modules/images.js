
const images = () =>{
    const popupImages = document.createElement('div'),
          popup = document.querySelector('.works'),
          workImages = document.createElement('img');

   popupImages.classList.add('popups');
   popup.appendChild(popupImages);

   popupImages.style.display = 'none';
   popupImages.style.justifyContent = 'center';
   popupImages.style.textAlign = 'center';

   popupImages.appendChild(workImages);
   
   popup.addEventListener('click', (e)=>{
        e.preventDefault();
        let target = e.target;

        if(target && target.classList.contains('preview')){
            popupImages.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            workImages.setAttribute('src', path);
        }

        if(target && target.matches('div.popups')){
            popupImages.style.display = 'none';
        }
   });
    
}

export default images;