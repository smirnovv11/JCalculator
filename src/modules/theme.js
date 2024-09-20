const body = document.querySelector('body')

const onLoadTheme = () => {
    const isLightMode = localStorage.getItem('isLightMode')

    if (isLightMode !== null && isLightMode === 'true') {
        body.classList.add('lightmode')
    } else {
        localStorage.setItem('isLightMode', false)
    }
}

const onSwitchTheme = event => {
    const isLightMode = body.classList.toggle('lightmode')

    localStorage.setItem('isLightMode', isLightMode)
    event.target.innerHTML = isLightMode ? 'Dark' : 'Light'
}

module.exports = {
    onLoadTheme,
    onSwitchTheme,
}
