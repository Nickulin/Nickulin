const tabs = (headerSelector, tabSelector, contentSelector, active, display='block') =>{

    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTabContent () {
        content.forEach(item=>{
            item.style.display ='none';
        })

        tab.forEach(item=>{
            item.classList.remove(active)
        })       
    }

    function showContent(i=0){
       content[i].style.display = display;
       tab[i].classList.add(active);       
    }
    hideTabContent();
    showContent();  

    header.addEventListener('click', (e)=>{
        const target = e.target;
        if(target && (
            target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, ''))
        )){
            tab.forEach((item, i) =>{
                if(item == target || target.parentNode == item){ // родитель текущего элемента 
                    hideTabContent();
                    showContent(i); 
                    console.log(2);
                }
            })
        }
    })
}

export default tabs;