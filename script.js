document.querySelector('.btn.equal').addEventListener('click', () => {
    const textField = document.getElementById('text_field');
    try{
        const result = eval(textField.value
            .replace(/x/g, '*')
            .replace(/[^-()\d/*+.]/g, ''));
        textField.value = result;
    } catch(error){
        textField.value = "Error";
    }
});

