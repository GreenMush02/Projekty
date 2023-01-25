const info = document.querySelector('.fa-question')
const colorEdit = document.querySelector('.fa-paint-brush')
const colors = document.querySelector('.colors')
const colorOneEdit = document.querySelector('.one')
const colorTwoEdit = document.querySelector('.two')
const colorThreeEdit = document.querySelector('.three')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')
const history = document.querySelector('.history')
const modalShadow = document.querySelector('.modal-shadow')
const modalClose = document.querySelector('.close')
const timeList = document.querySelector('.time-list')
let root = document.documentElement

let countTime
let minutes = 0
let seconds = 0

let timesArr = []

let flag = true

const handleStart = () => {

   if(flag) {

    countTime = setInterval(() => {
        if(seconds < 9){

           seconds++
           stopwatch.textContent = `${minutes}:0${seconds}`

        } else if (seconds >= 9 && seconds < 59){

            seconds++
            stopwatch.textContent = `${minutes}:${seconds}`

        } else if (seconds = 60) {
            minutes++
            seconds = 0
            stopwatch.textContent = `${minutes}:0${seconds}`
        }

    }, 100);

    flag = false
}


}

const handlePause = () => {

    clearInterval(countTime)
    flag = true

}

const handleStop = () => {

    

if (stopwatch.textContent !== '0:00'){

    timesArr.push(stopwatch.textContent)
    time.style.visibility = 'visible'
    time.textContent = `Ostatni czas: ${stopwatch.textContent}`
}

clearStuff()


}

const handleReset = () => {

  time.style.visibility = 'hidden'
  timesArr = []
  clearStuff()


}

const clearStuff = () => {
    clearInterval(countTime)
    timeList.textContent = ''
    flag = true
    seconds = 0
    minutes = 0
    stopwatch.textContent = '0:00'

}

const showHistory = () => {
    timeList.textContent = ''
    for ( let i = 0; i < timesArr.length; i++){
        const liItem = document.createElement('li')
        liItem.innerHTML = `Pomiar nr ${i+1}: <span>${timesArr[i]}</span>`
        timeList.appendChild(liItem)
    }
}

const showInfo = () => {
    if(!(modalShadow.style.display === 'block')){

        modalShadow.style.display = 'block'

    } else {
        modalShadow.style.display = 'none'
    }

    modalShadow.classList.toggle('modal-animation')
}

const showColors = () => {

    colors.classList.toggle('show-colors')

}


start.addEventListener('click', handleStart)
pause.addEventListener('click', handlePause)
stop.addEventListener('click', handleStop)
reset.addEventListener('click', handleReset)
history.addEventListener('click', showHistory)
info.addEventListener('click', showInfo)
modalClose.addEventListener('click', showInfo)
colorEdit.addEventListener('click', showColors)
window.addEventListener('click', e => e.target === modalShadow ? showInfo() : false)

colorOneEdit.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(250, 20, 6')
})

colorTwoEdit.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(6, 173, 250)')
})

colorThreeEdit.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(0, 255, 42)')
})


// const liItem = document.createElement('li')
// liItem.textContent = stopwatch.textContent
// timeList.appendChild(liItem)