const display = document.querySelector('.display')
let prevChar = ''

const append = value => {
    if ((isNaN(value) && prevChar === '') || (isNaN(value) && isNaN(prevChar))) {
        return
    }

    display.value += value
    prevChar = value
}

const onCalcButtonClick = event => {
    if (event.target.innerHTML === 'AC') {
        display.value = ''
        return
    }

    append(event.target.innerHTML)
}

const onKeyDown = event => {
    const key = event.key

    if (key === 'Backspace') {
        const line = [...display.value]
        line.pop()

        display.value = line.join('')
    }
    if (
        (!isNaN(key) && key !== ' ') ||
        key === '+' ||
        key === '-' ||
        key === '/' ||
        key === '%' ||
        key === ','
    ) {
        append(key)
    }
}

module.exports = {
    onCalcButtonClick,
    onKeyDown,
}
