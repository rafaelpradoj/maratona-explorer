const form = document.querySelector('form')
const button = document.querySelector('button')
const h3 = document.querySelector('.answer')

const answers = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

form.addEventListener('submit', event => {
  event.preventDefault()
  const inputQuestion = event.target.inputQuestion
  const totalAnswers = answers.length
  const randomAnswer = answers[Math.round(Math.random() * totalAnswers)]
  const question = `<div>${inputQuestion.value}</div>`

  if (inputQuestion.value === '') {
    alert('Digite sua pergunta!')
    return
  }

  button.setAttribute('disabled', true)

  h3.innerHTML = question + randomAnswer
  h3.style.opacity = 1


  setTimeout(() => {
    h3.style.opacity = 0
    button.removeAttribute('disabled')
  }, 3000)
})