const buttonEl = document.querySelectorAll('button');
console.log(buttonEl);

const inputFieldElement=document.getElementById('result');

for (let i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener('click', () => {
        const buttonValue = buttonEl[i].textContent;
        if (buttonValue==='C') {
            clearResult();
            
        }else if (buttonValue=='=') {
            calculateResult();
            
        }else{
            appendValue(buttonValue);
        }
    })
    //const buttonValue = buttonEl[i];
    
}

/*for (let i = 0; i < buttonEl.lenght; i++){
    buttonEl[i].addEventListener('click', () => {
       const buttonValue=buttonEl[i].textContent;
       if (buttonValue==='C') {
            clearResult();
       } else if (buttonValue==='=') {
            calculateResult();
       } else{
            appendValue(buttonValue);
       }
        
    });
}*/

function clearResult() {
    inputFieldElement.value=''
}
function calculateResult() {
    inputFieldElement.value=eval(inputFieldElement.value);
}
function appendValue(buttonValue) {
    inputFieldElement.value += buttonValue;

}