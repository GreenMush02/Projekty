const username = document.querySelector('#username')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')
const popupCloseBtn = document.querySelector('.close')




const clear = (e) => {


    [username, pass, pass2, email].forEach(element => {
        element.value = ''
        clearError(element)
    });
    
}

const showError = (input, msg) => {

    const formBox = input.parentElement
    const errorMsg = formBox.querySelector('.error-test')

    formBox.classList.add('error')
    errorMsg.textContent = msg;

}

const clearError = input => {
    const formBox = input.parentElement
    formBox.classList.remove('error')
}
const popupClose = () => {
    popup.classList.remove('show-popup')
}

const checkForm = (input) => {

    input.forEach(el => {
        if(el.value === '') {

            showError(el, el.placeholder)

        } else {

            clearError(el)

        }
    })
}

const checkLength = (input, min) => {

    if(input.value.length < min && input.value.length > 0) {
        showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} składa się z min. ${min} znaków.`)
    }

}

const checkPassword = (input, input2) => {
    if (input.value !== input2.value){
        showError(input2, `Hasła nie są takie same!`)
    }
}

const checkMail = (email) => {

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if(re.test(email.value)) {
        clearError(email)
    } else {
        showError(email, `E-mail jest niepoprawny.`)
    }

}

const checkErrors = () => {

    const allInputs = document.querySelectorAll('.form-box')
    let errorCount = 0

    allInputs.forEach(el => {
        if(el.classList.contains('error')) {
            errorCount++
        }
    })

    if(errorCount === 0) {
        popup.classList.add('show-popup')
        clear()
    }

}

sendBtn.addEventListener('click', e => {
    e.preventDefault()
    checkForm([username, pass, pass2, email])
    checkLength(username, 6)
    checkLength(pass, 8)
    checkPassword(pass, pass2)
    checkMail(email)
    checkErrors()
})

popupCloseBtn.addEventListener('click', e => {
    e.preventDefault()
    popupClose()
})

clearBtn.addEventListener('click', e => {
    e.preventDefault()
    clear()
})

