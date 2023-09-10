const getBtn = document.querySelector('#button');
const getChecked = document.querySelector('#agreementBtn')

getBtn.disable = true;
getBtn.style.opacity = '50%' 

getChecked.addEventListener('click', () => {
  alert('oi')
})