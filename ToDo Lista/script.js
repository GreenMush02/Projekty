let todoInput
let errorInfo
let addBtn
let ulList
let newTodo


let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn


const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
    
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click', confirmEdit)
    todoInput.addEventListener('keyup', enterKeyCheck)
}

const addNewTodo = () => {
    if (todoInput.value !== ''){
        
    newTodo = document.createElement('li')
    newTodo.textContent = todoInput.value
    createToolsArea()
    ulList.append(newTodo)
    

    todoInput.value = ''
    errorInfo.textContent = ''

    } else {
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}

const createToolsArea = () => {
    const toolsArea = document.createElement('div')
    toolsArea.classList.add('tools')
    newTodo.append(toolsArea)
    
    const confirmBtn = document.createElement('button')
    confirmBtn.classList.add('complete')
    confirmBtn.innerHTML = '<i class="fas fa-check"></i>'
    
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'

    const removeBtn = document.createElement('button')
    removeBtn.classList.add('delete')
    removeBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolsArea.append(confirmBtn, editBtn, removeBtn)


}

const checkClick = (e) => {
    if(e.target.matches('.complete')){
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    } else if (e.target.matches('.edit')) {
        console.log('edited');
        editTodo(e)
        

    } else if (e.target.matches('.delete')) {
        console.log('deleted');
        deleteTodo(e)
    }
   
    
}   

const editTodo = (e) => {
    popup.style.display = 'flex'
    todoToEdit = e.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent
}

const closePopup = () => {
    popup.style.display = 'none'
    popupInfo.textContent = ''
}

const confirmEdit = () => {
    if (popupInput.value !== ''){
    todoToEdit.firstChild.textContent = popupInput.value
    popup.style.display = 'none'
    popupInfo.textContent = ''
    } else {
        popupInfo.textContent = 'Nie możesz zostawić pustego pola!'
    }
}

deleteTodo = (e) => {
    e.target.closest('li').remove()
    const allTodos = document.querySelectorAll('li')

    if(allTodos.length === 0) {
        errorInfo.textContent = 'Brak zadań na liście'
    }
        
    
}

const enterKeyCheck = (e) => {
    if (e.key === 'Enter'){
        addNewTodo()
    }
}

document.addEventListener('DOMContentLoaded', main)

