let signUpPage = document.querySelector( '#signUpPage' )
let logInCode = document.querySelector( '#logInCode' )
let logInPlatforms = document.querySelector( '#logInPlatforms' )
let logInIn = document.querySelector( '#logInIn' )
let resetPass = document.querySelector( '#resetPass' )
let checkEmail = document.querySelector( '#checkEmail' )
let header = document.querySelector( '.header' )
let salutation = document.querySelector( '.salutation' )
let body = document.querySelector( 'body' )
let addCreditCard = document.querySelector( '#addCreditCard' )
let subscriptionModal = document.querySelector( '#subscriptionModal' )
let newPost = document.querySelector( '#newPost' )
let chooseGame = document.querySelector( '#chooseGame' )
let profileProgress = document.querySelector( '#profileProgress' )
let levelProgress = document.querySelector( '#levelProgress' )
let applyPartner = document.querySelector( '#applyPartner' )
let editProfile = document.querySelector( '#editProfile' )
let hostPartie = document.querySelector( '#hostPartie' )
let hostPlatform = document.querySelector( '#hostPlatform' )
let hostPlatformFromProfile = document.querySelector( '#hostPlatformFromProfile' )
let gametrag = document.querySelector( '#gametrag' )
let gamertagFromProfile = document.querySelector( '#gamertagFromProfile' )
let gametragPlatform = document.querySelector( '#gametragPlatform' )
let addGametrag = document.querySelector( '#addGametrag' )
let hostLiveShow = document.querySelector( '#hostLiveShow' )
let additionalSettings = document.querySelector( '#additionalSettings' )
let removeUser = document.querySelector( '#removeUser' )
let titleModal = document.querySelector( '#titleModal' )
let editPartie = document.querySelector( '#editPartie' )
let partieReport = document.querySelector( '#partieReport' )
let ratingPartie = document.querySelector( '#ratingPartie' )
let titleModalStart = document.querySelector( '#titleModalStart' )
let inviteFriends = document.querySelector( '#inviteFriends' )
let members = document.querySelector( '#members' )
let newChat = document.querySelector( '#newChat' )
let chatHead = document.querySelector( '#chatHead' )
let editChat = document.querySelector( '#editChat' )
let leaveChat = document.querySelector( '#leaveChat' )
let inviteFriendsSetting = document.querySelector( '#inviteFriendsSetting' )
let deleteAccount = document.querySelector( '#deleteAccount' )
let changePaymentMethod = document.querySelector( '#changePaymentMethod' )
let addCreditCardSetting = document.querySelector( '#addCreditCardSetting' )
let share = document.querySelector( '#share' )
let logInPlatformsGames = document.querySelector( '#logInPlatformsGames' )
let headerLogo = document.querySelector( '.header__logo' )
let arrlogInMenu = document.querySelectorAll( '.logIn__menu' )
let arrModalWrapp = document.querySelectorAll( '.modal-wrapp' )
let arrFeedHeaderMenu = document.querySelectorAll( '.feed__header_menu' )
let bgYellowBlue = document.querySelector( '.bg-yellow-blue' )
let welcomeMobile = document.querySelector( '#welcomeMobile' )
let gamertags = document.querySelector( '#gamertags' )
let preferencesModal = document.querySelector( '#preferencesModal' )
let unfollow = document.querySelector( '#unfollow' )
let hostLiveShowMobile = document.querySelector( '#hostLiveShowMobile' )
let gametragName = document.querySelector( '#gametragName' )
let createShortcutMobile = document.querySelector( '#createShortcutMobile' )
let editShortcutMobile = document.querySelector( '#editShortcutMobile' )
let levelProgressToken = document.querySelector( '#levelProgressToken' )
let levelProgressAchivements = document.querySelector( '#levelProgressAchivements' )
let settingsPlatforms = document.querySelector( '#settingsPlatforms' )
let photoAvatar = document.querySelector( '#photoAvatar' )
let chooseGameSettings = document.querySelector( '#chooseGameSettings' )

document.addEventListener( 'DOMContentLoaded', function () {

    jQuery( function ($) {
        $( ".card-number" ).mask( "0000 0000 0000 0000" );
        $( ".add-credit-card__input-group .input-date" ).mask( "00/00" );
        $( ".add-credit-card__input-group .input-CVC" ).mask( "000" );
        $( ".logIn__code_code input" ).mask( "00000" );
        $( ".date-of-birth" ).mask( "00/00/0000" );
    } );

    // $( '.slider' ).slick( {
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     infinite: true,
    //     swipeToSlide: true,
    //     responsive: [
    //         {
    //             breakpoint: 1023,
    //             settings: {
    //                 slidesToShow: 3
    //             }
    //         }
    //     ]
    // } )

    function logoAnimate() { // анимицаия лого
        let arrBgAnimate = document.querySelectorAll( '.bg-animate' )
        let logo = document.getElementById( 'logo' )
        for (let bgAnimate of arrBgAnimate)
            bgAnimate.style.cssText = 'opacity: 1'
        for (let logInMenu of arrlogInMenu)
            logInMenu.style.height = '260px'
    }

    setTimeout( logoAnimate, 3000 )


    let arrChecked = [] // появление кнопки platforms continue
    let arrPlatforms = document.querySelectorAll( '.logIn__platforms-platforms input' )
    let bgRedBlue = document.querySelector( '.bg-red-blue' )
    let btnPlatforms = document.getElementById( 'btnPlatforms' )
    for (let platform of arrPlatforms) {
        platform.addEventListener( 'change', function () {
            if (platform.checked) {
                arrChecked.push( '' )
            } else {
                arrChecked.pop()
            }
            if (arrChecked.length > 0) {
                btnPlatforms.style.display = 'block'
                btnPlatforms.style.zIndex = '1'
                btnPlatforms.classList.remove( 'animate__fadeOutDown' )
                btnPlatforms.classList.add( 'animate__fadeInUp' )
                if (window.innerWidth > 1023) { //pc
                    btnPlatforms.style.zIndex = ''
                    bgRedBlue.style.visibility = 'visible'
                    bgRedBlue.style.opacity = '1'
                }

            } else {
                btnPlatforms.classList.remove( 'animate__fadeInUp' )
                btnPlatforms.classList.add( 'animate__fadeOutDown' )
                setTimeout( function () {
                    btnPlatforms.style.cssText = ''
                }, 300 )
                if (window.innerWidth > 1023) { //pc
                    btnPlatforms.style.zIndex = '-1'
                    bgRedBlue.style.cssText = ''
                }
            }
        } )
    }


    let arrCheckedGames = [] // появление кнопки games continue
    let arrPlatformsGames = document.querySelectorAll( '#logInPlatformsGames .cards input' )
    let btnPlatformsGames = document.getElementById( 'btnPlatformsGames' )
    for (let platform of arrPlatformsGames) {
        platform.addEventListener( 'change', function () {
            if (platform.checked) {
                arrCheckedGames.push( '' )
            } else {
                arrCheckedGames.pop()
            }
            if (arrCheckedGames.length > 0) {
                btnPlatformsGames.style.display = 'block'
                btnPlatformsGames.classList.remove( 'animate__fadeOutDown' )
                btnPlatformsGames.classList.add( 'animate__fadeInUp' )
                if (window.innerWidth > 1023) {
                    btnPlatformsGames.style.visibility = ''
                }

            } else {
                btnPlatformsGames.classList.remove( 'animate__fadeInUp' )
                btnPlatformsGames.classList.add( 'animate__fadeOutDown' )
                if (window.innerWidth > 1023) { //pc
                    setTimeout( function () {
                        btnPlatformsGames.style.visibility = 'hidden'
                    }, 300 )
                }
            }
        } )
    }

} )

function next(open, close) {

    if (window.innerWidth <= 1023) { // mobile

        if (close === newPost) {
            openModal( open )
        } else if (open === addCreditCard || open === subscriptionModal) {
            open.style.visibility = 'visible'
            open.style.zIndex = '1'
            open.style.opacity = '1'
            open.children[1].style.left = '0'
            close.style.cssText = ''
            closeModal( checkEmail )
        } else if (open === hostPlatform) {
            openModal( hostLiveShowMobile )
        } else {
            openModal( open )
            closeModal( close )
        }

        if (open === createShortcutMobile) closeModal( hostLiveShowMobile )
    }

    if (window.innerWidth > 1023) { // pc
        if (open === addCreditCard || open === subscriptionModal) {
            open.style.left = '0'
            open.style.visibility = 'visible'
            close.style.cssText = ''
            setTimeout( function () {
                bgYellowBlue.style.visibility = 'visible'
                bgYellowBlue.style.opacity = '1'
            }, 500 )

        } else {
            openModal( open )
            closeModal( close )
        }
        if (open === welcomeMobile) {
            location.href = '/feed.html'
        }


        if (open === logInCode || open === logInPlatforms || open === logInPlatformsGames || open === checkEmail)
            open.children[0].style.left = '0'
        setTimeout( function () {
            if (close === logInCode) {
                close.children[0].style.left = '100%'
                header.style.opacity = '0'
                salutation.style.visibility = 'hidden'
                body.style.background = '#000'
            } else {
                close.children[0].style.left = ''
                header.style.opacity = ''
                salutation.style.visibility = ''
                body.style.background = ''
            }
        }, 500 )

        if (open === logInIn) {
            header.style.opacity = ''
            body.style.background = ''
            salutation.style.visibility = ''
            close.style.left = '100%'
            openModal( open )
        }

    }
}

function back(close, open) {
    if (window.innerWidth > 1023) { // pc
        if (open === subscriptionModal) {
            open.style.left = '0'
            open.style.visibility = 'visible'
            close.style.left = ''
        } else {
            closeModal( close )
            openModal( open )
        }
        if (close === subscriptionModal) {
            bgYellowBlue.style.cssText = ''
        }
    }
    if (window.innerWidth <= 1023) { // mobile
        if (open === subscriptionModal) {
            open.style.left = '0'
            open.children[1].style.left = '0'
            close.style.left = ''
            close.children[1].style.left = ''
        } else {
            closeModal( close )
            openModal( open )
        }
    }
}

function openModal(modal) { // modal
    body.style.overflow = 'hidden'
    modal.classList.add( 'show' )

    if (window.innerWidth > 1023) { //pc
        modal.style.opacity = '1'
        modal.style.zIndex = '13'
        modal.children[0].style.zIndex = '1'
        modal.children[0].style.opacity = '1'
        modal.style.backgroundColor = 'rgba(20,20,20,0.8)'

        if (headerLogo !== null) headerLogo.style.zIndex = '1'

        if (modal === resetPass) {
            logInIn.style.top = ''
        }
    } else { // mobile
        modal.style.zIndex = '2'
        modal.style.opacity = '1'
        modal.children[0].style.left = '0'
        modal.children[0].style.bottom = '0'

        if (modal === share) modal.style.zIndex = '14'
    }
}

function closeModal(modal) {
    if (window.innerWidth <= 1023) { //mobile
        if (modal === gametrag) closeModal( gamertags )
        if (modal === levelProgressToken) {
            $( '#levelProgressToken .modal__content' ).slick( 'unslick' )
        }
        if (modal === levelProgressAchivements) {
            $( '#levelProgressAchivements .modal__content' ).slick( 'unslick' )
        }
    }

    modal.classList.remove( 'show' )
    body.style.overflow = ''
    modal.style.cssText = ''
    modal.children[0].style.cssText = ''
    if (headerLogo !== null) headerLogo.style.zIndex = ''

    if (modal === subscriptionModal) {
        bgYellowBlue.style.cssText = ''
    }

    setTimeout( function () {
        modal.style.cssText = ''
    }, 300 )

}


function backPartieReport(close) {
    if (window.innerWidth <= 1024) {
        closeModal( close )
        document.querySelector( '.feed__header_menu' ).click()
    }
}


let arrHeedHeaderMenu = document.querySelectorAll( '.feed__header_menu' )
let postMenu = document.querySelector( '#postMenu' )

if (window.innerWidth >= 1024) {
    for (let el of arrHeedHeaderMenu) {
        el.onclick = function () {
            let x = el.getBoundingClientRect()
            postMenu.style.position = 'fixed'
            postMenu.style.left = x.left + 'px'
            postMenu.style.top = x.top + 42 + 'px'
            postMenu.style.visibility = 'visible'
            postMenu.style.opacity = '1'
        }
    }

    $(window).on('scroll', function (e) {
        postMenu.style.cssText = ''
    });
}


let headerMenuMobile = document.querySelector( '.post-menu .header__menu_menu' )
let linksMobile = document.querySelectorAll( '.post-menu .header__menu_menu a' )

if (linksMobile !== null && headerMenuMobile !== null) {
    for (let link of linksMobile) {
        if (window.innerWidth <= 1023) {
            window.addEventListener( 'click', function (e) {
                if (e.target === headerMenuMobile.children[1] ||
                    e.target === headerMenuMobile.children[1].children[0] ||
                    e.target === link) {
                    headerMenuMobile.style.cssText = ''
                    headerMenuMobile.parentElement.style.cssText = ''
                    body.style.overflow = ''
                }
            } )
        }
    }
}


let postMenuMenu = document.querySelector( '#postMenu.header__menu_menu' )
let links = document.querySelectorAll( '#postMenu.header__menu_menu a' )

if (links !== null && postMenuMenu !== null) {
    if (window.innerWidth >= 1024) {
        for (let link of links) {
            window.addEventListener( 'click', function (e) {
                if (e.target === postMenuMenu.children[0] || e.target === link) {
                    $('.feed__header_menu').removeClass('opened')
                    postMenuMenu.style.cssText = ''
                    postMenuMenu.parentElement.style.cssText = ''
                }
            } )
        }
    }
}



let shortcuts = document.querySelector( '.shortcuts' )
let heightShortcuts = 0
let onShortcuts = false
let btnUp = document.querySelector( '.btn-up' )
let bgClick = document.querySelector( '.bg-click' )
if (shortcuts !== null) {
    heightShortcuts = shortcuts.offsetHeight
    shortcuts.style.bottom = -heightShortcuts + 40 + 87 + 'px'
}

function shortcutsUp() {
    if (window.innerWidth >= 1024) { // PC
        onShortcuts = !onShortcuts
        if (onShortcuts) {
            shortcuts.style.bottom = '0'
            btnUp.style.transform = 'rotateX(190deg)'
            bgClick.style.zIndex = '1'
            bgClick.style.opacity = '1'
        } else {
            shortcutsDown()
        }
    } else { // mobile
        hostPartie.children[0].style.overflow = 'hidden'
        shortcuts.style.bottom = '0'
    }
}

function shortcutsDown() {
    shortcuts.style.bottom = -heightShortcuts + 40 + 87 + 'px'
    hostPartie.children[0].style.overflow = ''
    btnUp.style.transform = ''
    bgClick.style.cssText = ''
}


function openBurger() {
    let windowBurger = document.querySelector( '.burger__menu' )
    let burgerBg = document.querySelector( '.burger-bg' )
    let closePlace = windowBurger.querySelector( '.close-place' )
    windowBurger.style.opacity = '1'
    windowBurger.style.visibility = 'visible'
    closePlace.addEventListener( 'click', function () {
        windowBurger.style.cssText = ''
    } )
    burgerBg.addEventListener( 'click', function () {
        windowBurger.style.cssText = ''
    } )

    if (window.innerWidth <= 1023) {
        $( function () {
            $( windowBurger ).swipe( {
                swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                    if (direction === 'down') {
                        windowBurger.style.cssText = ''
                    }
                }
            } )
        } )
    }
}


let feedPostImg = document.querySelector( '.post .feed__post_img img' )
let bg = document.querySelector( '.img-bg' )
let bgBtn = document.querySelector( '.img-bg__close' )
let bgBtnShare = document.querySelector( '.img-bg__share' )
let img
if (feedPostImg !== null) {
    feedPostImg.onclick = openImg

    function openImg() {
        img = this
        if (window.innerWidth >= 1024) { // pc
            this.style.cssText =
                'top:0;' +
                'right:0;' +
                'bottom:0;' +
                'left:0;' +
                'position:fixed;' +
                'z-index: 12;' +
                'margin: auto;' +
                'padding: 0 50px'
        } else { // mobile
            this.style.cssText =
                'top:0;' +
                'right:0;' +
                'bottom:0;' +
                'left:0;' +
                'position:fixed;' +
                'z-index: 12;' +
                'margin: auto;'
        }

        bg.style.zIndex = '11'
        bgBtn.style.display = 'block'
        bgBtnShare.style.display = 'block'
        bgBtn.onclick = function () {
            img.style.cssText = ''
            bg.style.zIndex = ''
            bgBtn.style.cssText = ''
            bgBtnShare.style.cssText = ''
        }
        bg.onclick = function () {
            img.style.cssText = ''
            bg.style.zIndex = ''
            bgBtn.style.cssText = ''
            bgBtnShare.style.cssText = ''
        }
        bgBtnShare.onclick = function () {
            openModal( share )
        }
    }
}


// function auto_grow(element) {
//     // element.style.overflow = 'scroll'
//     element.style.height = (element.scrollHeight) + 'px';
//     if(element.value.length === 0) element.style.height = ''
//     console.log(element.value.length)
// }


const tx = document.getElementsByTagName( 'textarea' );
for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute( 'style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;' );
    tx[i].addEventListener( "input", OnInput, false );
}

function OnInput() {
    this.style.transitionDelay = '0s';
    this.style.transition = '0s';
    this.style.height = '25px';
    this.style.height = (this.scrollHeight) + 'px';
}

if (window.innerWidth <= 1023) {
    window.onclick = function (e) {
        for (let modalWrapp of arrModalWrapp)
            if (e.target === modalWrapp) modalWrapp.style.cssText = ''
    }
}


if (window.innerWidth <= 1023) {
    let modalWrapps = document.querySelectorAll( '.modal-wrapp' )
    for (let el of modalWrapps) {
        window.addEventListener( 'click', function (e) {
            if (e.target === el) closeModal( el )
        } )
    }
}


function enterCodeCenter(el) {
    el.value.length ? el.style.textAlign = 'center' : el.style.textAlign = ''
}


let onChangeBtnPublic

function changeBtnPublic(el) {
    onChangeBtnPublic = !onChangeBtnPublic
    if (onChangeBtnPublic) {
        el.innerHTML = 'Private partie'
        el.style.background = '#14131a url(../img/icon/lock.svg) 12px 50%/11px 12px no-repeat'
        el.style.paddingLeft = '30px'
        el.style.color = '#fff'
    } else {
        el.innerHTML = 'Public partie'
        el.style.cssText = ''
    }
}



function onFileSelected(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    var imgtag = document.getElementById("myimage");
    imgtag.title = selectedFile.name;

    reader.onload = function(event) {
        imgtag.src = event.target.result;
    };

    reader.readAsDataURL(selectedFile);
    document.querySelector(".hostLiveShow__img").style.display = ''

}


function deleteImg() {
    document.querySelector(".hostLiveShow__img").style.display = 'none'
}



function btnPost(el) {
    let btn = document.querySelector('.feed__what-new_post')
    if (el.value) {
        btn.classList.add('btn-yellow')
    } else {
        btn.classList.remove('btn-yellow')
    }
}


let editProfileBtn = document.querySelector('#editProfileBtn')
let editProfileDescription = document.querySelector('#editProfileDescription')
let editProfileWebsite = document.querySelector('#editProfileWebsite')

function btnSave() {
    if (editProfileDescription.value || editProfileWebsite.value) {
            editProfileBtn.classList.add( 'show-btn' )
    } else {
        editProfileBtn.classList.remove('show-btn')
    }
}

if(navigator.userAgent.indexOf('Mac') > 0)
    body.className += " mac-os";

@@include( 'slick.min.js' )
@@include( '_loginButtons.js' )
@@include( 'feed.js' )
@@include( 'profile.js' )
@@include( 'partie.js' )
@@include( 'settings.js' )
@@include( 'about.js' )
@@include( 'search.js' )
@@include( 'notifications.js' )
@@include( 'jquery.mask.js' )
@@include( 'swipeMobile.js' )
@@include( 'jquery.touchSwipe.min.js' )
