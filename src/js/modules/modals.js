const modals = () =>{

    const bindModal = (triggerSelector, contentSelector, closeSelector, closeClickIverlay = true)=>{
        const trigger = document.querySelectorAll(triggerSelector) ,
              modal = document.querySelector(contentSelector),
              close = document.querySelector(closeSelector),
              window = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();

        trigger.forEach(item=>{
            item.addEventListener('click', (e)=>{
                if(e.target){
                    e.preventDefault();
                }
                window.forEach(item=>{
                    item.style.display ='none';
                })
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            })
        })

        close.addEventListener('click', ()=>{
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
            window.forEach(item=>{
                item.style.display ='none';
            })
        })

        modal.addEventListener('click', (e)=>{
            if(e.target == modal && closeClickIverlay){
                modal.style.display ='none';
                document.body.style.overflow ='';
                document.body.style.marginRight = '0px';
                window.forEach(item=>{
                    item.style.display ='none';
                })
            }
        })       
    }
   function showModalByTime (selector, time){
        setTimeout(()=>{
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
   }

   function calcScroll(){
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        return scrollWidth;
   }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close' );
    bindModal('.phone_link', '.popup', '.popup .popup_close'); 
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close'); 
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('.popup', 2000);
}

export default modals;