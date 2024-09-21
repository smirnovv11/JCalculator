import './style.css'
import { onLoadTheme, onSwitchTheme } from './modules/theme'
import { onCalcButtonClick, onKeyUp } from './modules/calculator'
import { randomFact } from './modules/facts'

const themeButton = document.querySelector('.theme-btn')
const calcButtons = document.querySelectorAll('.calculator-btn')
const body = document.querySelector('body')
const jfact = document.querySelector('.jfact')

onLoadTheme()

themeButton.addEventListener('click', event => onSwitchTheme(event))
calcButtons.forEach(el => el.addEventListener('click', event => onCalcButtonClick(event)))
body.addEventListener('keydown', event => onKeyUp(event))
jfact.innerHTML = 'JFact: ' + randomFact()

window.onload = () => {
    document.querySelector('.loading-screen').remove()
}
