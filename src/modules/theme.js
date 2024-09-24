const body = document.querySelector('body')

const onLoadTheme = () => {
    const isLightMode = localStorage.getItem('isLightMode')

    if (isLightMode !== null && isLightMode === 'true') {
        body.classList.add('lightmode')
    } else {
        localStorage.setItem('isLightMode', false)
    }
}

const onSwitchTheme = () => {
    const isLightMode = body.classList.toggle('lightmode')

    localStorage.setItem('isLightMode', isLightMode)
}

module.exports = {
    onLoadTheme,
    onSwitchTheme,
}
