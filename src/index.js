import './style.css'
import { onLoadTheme, onSwitchTheme } from './modules/theme'
import { onCalcButtonClick, onKeyUp } from './modules/calculator'

const themeButton = document.querySelector('.theme-btn')
const calcButtons = document.querySelectorAll('.calculator-btn')
const body = document.querySelector('body')

onLoadTheme()

themeButton.addEventListener('click', event => onSwitchTheme(event))
calcButtons.forEach(el => el.addEventListener('click', event => onCalcButtonClick(event)))
body.addEventListener('keyup', event => onKeyUp(event))
