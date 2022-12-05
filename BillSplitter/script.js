const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const countBtn = document.querySelector('.count')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')


const check = () => {

    if (price.value === '' || people.value === '' || tip.value == 0){

        error.textContent = 'Uzupełnij wszystkie pola!'
        costInfo.style.display = 'none'

    } else {
        
        error.textContent = ''
        count()
        
    }

}


const count = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);
    
    const sum = (newPrice + newPrice * newTip) / newPeople
    
    costInfo.style.display = 'block'

    cost.textContent = sum.toFixed(2)
    
}


countBtn.addEventListener('click', check)