const buttons = document.querySelectorAll('.nombre, .operateur')
const clearButton = document.querySelector('.clear')
const egalite = document.querySelector('.egale')
const resultat = document.querySelector('.resultat')

buttons.forEach(button => {
  button.addEventListener('click', () => { 
    const buttonValue = button.getAttribute('data-num');  
    resultat.textContent += buttonValue
  })
})

egalite.addEventListener('click', () => { 
  resultat.textContent = eval(resultat.textContent)
})

clearButton.addEventListener('click', () => { 
  resultat.textContent = ""
})