const getBtn = document.querySelector('#button');
const getChecked = document.querySelector('#agreementBtn')
const getForms = document.querySelector('#forms')

getBtn.disabled = true;
getBtn.style.opacity = '50%' 

function sendInfo() {
  getBtn.addEventListener('click', function() {
    const inputNome = document.getElementById('firstName')
    const valorNome = inputNome.value.trim();
    if(valorNome === '') {
      return alert('Erro! Nome inválido!')
    }
    const inputLastName = document.getElementById('lastName')
    const valorLastName = inputLastName.value.trim();
    if(valorLastName === '') {
      return alert('Erro! Sobrenome inválido!')
    }
    // while(getForms.childNodes.length > 0) {
    //   getForms.removeChild(getForms.firstChild)
    // }
    getForms.innerHTML = '';
    getForms.style.textAlign = 'center'
    getForms.style.fontSize = '30px'
    getForms.innerText = 'Formulário enviado com sucesso!'
  })
}


getChecked.addEventListener('click', () => {
  if (getBtn.disabled === true) {
    getBtn.disabled = false;
    getBtn.style.opacity = '100%' 
  } else {
    getBtn.disabled = true;
    getBtn.style.opacity = '50%' 
  }
})

sendInfo();