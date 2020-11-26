let arrShowAll = document.querySelectorAll('#showAll')
let arrBtnSocial = document.querySelectorAll('.btn-container-show')
let arrBtnContainerWrapp = document.querySelectorAll('.btn-container-wrapp')

let btnSocialMobile = document.querySelector('#btnSocialMobile')

for (let i = 0; i < arrShowAll.length; i++) {
    let showAll = arrShowAll[i]
    let btnContainerWrapp = arrBtnContainerWrapp[i]
    let btnSocial = arrBtnSocial[i]

    function showAllBtns() { // анимация кнопок на стартовой
        if (window.innerWidth <= 1023) { // mobile
            btnSocialMobile.parentElement.style.top = '0'
            btnSocialMobile.parentElement.style.zIndex = '3'
            btnSocialMobile.classList.remove( 'animate__fadeOutDownBig' )
            btnSocialMobile.classList.add( 'animate__fadeInUp' )
            btnSocialMobile.style.cssText = 'z-index: 0; display: block;'
        }
        else { // pc
            for(let i = 0; i < arrShowAll.length; i++){
                let showAll = arrShowAll[i]
                for(let logInMenu of arrlogInMenu) logInMenu.style.height = 'auto'
                showAll.style.display = 'none'
                btnContainerWrapp.style.top = '0'
                btnSocial.classList.remove( 'animate__fadeOutDownBig' )
                btnSocial.classList.add( 'animate__fadeInUp' )
                btnSocial.style.cssText = 'z-index: 0; display: block;'
            }
        }
    }

    function showAllBtnsOff(btnContainerWrapp) {
        btnContainerWrapp.style.top = ''
        let btnSocial = btnContainerWrapp.querySelector('.btn-container-show')
        btnSocial.classList.add('animate__fadeOutDownBig')
        btnSocial.classList.remove('animate__fadeInUp')
    }

    btnContainerWrapp.addEventListener( 'click', handlerShowAllBtnsOff)
    btnContainerWrapp.addEventListener( 'touchstart', handlerShowAllBtnsOff)
}

function handlerShowAllBtnsOff(e) {
    if (e.target.classList.contains('btn-container-wrapp')) {
        showAllBtnsOff(this)
    }
}


function showBtns(el) {
    let subscriptionChange = document.querySelector('.subscription__change.mobile')
    if (el === subscriptionChange) {
        let title = document.querySelector('.subscription__payment_title')
        title.innerHTML = 'Change payment method'
    }

    let btnShow = document.querySelector('.subscription .btn-container-show')
    let btnWrapp = document.querySelector('.subscription .btn-container-wrapp')
    if(window.innerWidth <= 1023) { // mobile
        btnWrapp.style.top = '0'
        btnWrapp.style.zIndex = '2'
        btnShow.classList.remove( 'animate__fadeOutDownBig' )
        btnShow.classList.add( 'animate__fadeInUp' )
        btnShow.style.cssText = 'z-index: 0; display: block;'
    }

    btnWrapp.addEventListener( 'click', function(e) {
        let btns = document.querySelectorAll('.subscription .btn-container-wrapp button')
        for(let btn of btns)
        if (e.target === btnWrapp || e.target === btn) {
            btnWrapp.style.top = ''
            btnShow.classList.add('animate__fadeOutDownBig')
            btnShow.classList.remove('animate__fadeInUp')
        }
    })
}

function closeBtns(el) {
    el.parentElement.classList.add('animate__fadeOutDownBig')
    el.parentElement.classList.remove('animate__fadeInUp')
    el.parentElement.parentElement.style.cssText = ''
}

