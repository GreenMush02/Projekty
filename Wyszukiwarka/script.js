const input = document.querySelector('.search')
const ulList = document.querySelector('ul')
const liItem = ulList.querySelectorAll('li')

// const drinkSearch = () => {
//     liItem.forEach (drink => {
//         if (input.value.match(drink.textContent.substring(0)) ){

//             drink.style.display = 'block'

//         } else {
//             drink.style.display = 'none'
//         }
//     })
// }

const drinkSearch = (e) => {

    const text = e.target.value.toLowerCase()

    liItem.forEach (drink => {

        const task = drink.textContent.toLowerCase()
        
        if (task.indexOf(text) !== -1 ){

            drink.style.display = 'block'

        } else {
            drink.style.display = 'none'
        }
    })
}

input.addEventListener('keyup', drinkSearch)