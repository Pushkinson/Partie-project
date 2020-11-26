let tell = document.querySelector('#Tell')

if(tell !== null) {
    tell.addEventListener('keyup', function () {
        let label = document.querySelector('#How label')
        let btn = document.querySelector('#How button')
        if(tell.value.length) {
            label.style.opacity = '.5'
            label.style.top = '70px'
            label.style.fontSize = '13px'
            btn.style.opacity = '1'
            btn.style.visibility = 'visible'
        } else {
            label.style.cssText = ''
            btn.style.cssText = ''
        }
    })
}

