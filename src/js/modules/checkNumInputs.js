const checkNumInputs = (selector)=>{
    const numSelector = document.querySelectorAll(selector);

    numSelector.forEach(item=>{
        item.addEventListener('input', ()=>{
            item.value = item.value.replace(/\D/, '');
        });
    });
}

export default checkNumInputs;