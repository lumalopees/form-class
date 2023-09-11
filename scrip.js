const getBtn = document.querySelector('#button');
const getChecked = document.querySelector('#agreementBtn')

getBtn.disable = true;
getBtn.style.opacity = '50%' 

getChecked.addEventListener('click', () => {
  if (getBtn.disable === true) {
    getBtn.disable = false;
    getBtn.style.opacity = '100%' 
  } else {
    getBtn.disable = true;
    getBtn.style.opacity = '50%' 
  }
})