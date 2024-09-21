const display = document.querySelector('.display')

let activeOperation = null
let isWaitingForSecondOperand = false
let currentOperands = {}

const removeActiveOperator = () => {
    const activeButton = document.querySelector('.operation.primary.active')
    if (activeButton) {
        activeButton.classList.remove('active')
    }
}

const resetCalculator = () => {
    display.value = '0'
    activeOperation = null
    isWaitingForSecondOperand = false
    currentOperands = {
        first: {
            value: '0',
            hasComma: false,
        },
        second: {
            value: '0',
            hasComma: false,
        },
    }
    removeActiveOperator()
}

resetCalculator()

const handleInput = inputValue => {
    if (isNumeric(inputValue)) {
        updateDisplay(inputValue)
        storeOperand(inputValue)
        return
    }

    switch (inputValue) {
        case ',':
            handleComma()
            break
        case '%':
            handlePercentage()
            break
        case '+/-':
            toggleSign()
            break
        case '=':
            handleEqual()
            break
        default:
            handleOperator(inputValue)
            break
    }
}

const isNumeric = value => !isNaN(value)

const updateDisplay = (value, append = true) => {
    if (append) {
        display.value === '0' || isWaitingForSecondOperand
            ? (display.value = value)
            : (display.value += value)
        isWaitingForSecondOperand = false
    } else {
        display.value = value
    }
}

const storeOperand = value => {
    if (activeOperation !== null) {
        if (isWaitingForSecondOperand) {
            currentOperands.second.value = value
            isWaitingForSecondOperand = false
        } else {
            currentOperands.second.value += value
        }
    } else {
        currentOperands.first.value === '0'
            ? (currentOperands.first.value = value)
            : (currentOperands.first.value += value)
    }
}

const handleComma = () => {
    const current = activeOperation ? currentOperands.second : currentOperands.first
    if (!current.hasComma) {
        current.hasComma = true
        current.value += '.'
        updateDisplay('.', true)
    }
}

const handlePercentage = () => {
    const current = activeOperation ? currentOperands.second : currentOperands.first
    current.value = (parseFloat(current.value) / 100).toString()
    updateDisplay(current.value, false)
}

const toggleSign = () => {
    const current = activeOperation ? currentOperands.second : currentOperands.first
    current.value = (parseFloat(current.value) * -1).toString()
    updateDisplay(current.value, false)
}

const handleOperator = operator => {
    if (activeOperation && !isWaitingForSecondOperand) {
        const result = performCalculation(
            parseFloat(currentOperands.first.value),
            parseFloat(currentOperands.second.value),
            activeOperation,
        )
        updateDisplay(result, false)
        currentOperands.first.value = result.toString()
        currentOperands.second.value = '0'
    }

    isWaitingForSecondOperand = true

    setActiveOperator(operator)
    activeOperation = operator
}

let lastOperator = null
let lastOperand = null

const handleEqual = () => {
    if (!activeOperation && lastOperator === null) return

    if (!isWaitingForSecondOperand) {
        const result = performCalculation(
            parseFloat(currentOperands.first.value),
            parseFloat(currentOperands.second.value),
            activeOperation,
        )
        updateDisplay(result, false)
        currentOperands.first.value = result.toString()

        lastOperator = activeOperation
        lastOperand = currentOperands.second.value

        resetForNextOperation()
    } else if (lastOperator !== null && lastOperand !== null) {
        const result = performCalculation(
            parseFloat(currentOperands.first.value),
            parseFloat(lastOperand),
            lastOperator,
        )
        updateDisplay(result, false)
        currentOperands.first.value = result.toString()
    }
}

const performCalculation = (a, b, operator) => {
    switch (operator) {
        case '+':
            return a + b
        case '-':
            return a - b
        case 'x':
            return a * b
        case '/':
            return b === 0 ? 'Error' : a / b
        default:
            return 0
    }
}

const resetForNextOperation = () => {
    activeOperation = null
    isWaitingForSecondOperand = true
    currentOperands.second.value = '0'
    removeActiveOperator()
}

const setActiveOperator = operator => {
    removeActiveOperator()

    const operatorButtons = document.querySelectorAll('button.operation.primary')

    operatorButtons.forEach(button => {
        if (button.innerHTML === operator) {
            button.classList.add('active')
        }
    })
}

const onCalcButtonClick = event => {
    const target = event.target
    const value = target.innerHTML

    if (value === 'AC') {
        resetCalculator()
        return
    }

    handleInput(value)
}

const onKeyUp = event => {
    const key = event.key

    if (key === 'Backspace') {
        display.value = display.value.slice(0, -1) || '0'
        return
    }

    if (isNumeric(key)) {
        handleInput(key)
    } else if (key === ',') {
        handleComma()
    } else if (['+', '-', '*', '/'].includes(key)) {
        handleOperator(key)
    } else if (key === 'Enter') {
        handleEqual()
    }
}

module.exports = {
    onCalcButtonClick,
    onKeyUp,
}
