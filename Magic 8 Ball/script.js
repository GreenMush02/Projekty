const ball = document.querySelector('.ball-img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const answers = ['Nie chcesz znać odpowiedzi na to pytanie', 'Tak', 'Nie']



const shake = () => {
    error.textContent = ''
    answer.textContent = ''
    ball.classList.add('shake-animation')
    setTimeout(check, 1000)
}

const check = () => {

    ball.classList.remove('shake-animation')



    if(input.value !== '' && input.value.charAt(input.value.length-1).includes('?')){
        randomAnswer()
        input.value = ''
    } else if (input.value === '') {
        answer.textContent = ''
        error.textContent = 'Najpierw zadaj pytanie!'
    } else {
        answer.textContent = ''
        error.textContent = 'Pytanie musi zostać zakończone pytajnikiem (?)'
    }

    

}


const randomAnswer = () => {
    const number = Math.floor(Math.random()*answers.length)
    error.textContent = ''
    answer.innerHTML = `<span>Odpowiedź:</span> ${answers[number]}`
}

ball.addEventListener('click', shake)

