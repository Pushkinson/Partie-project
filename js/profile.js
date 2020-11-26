function openTab(evt, Tab) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll( ".profile__tabs .tabcontent" );
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.transition = ".4s";
        tabcontent[i].style.opacity = "0";
        tabcontent[i].style.transform = "scale(.95)";
        tabcontent[i].style.height = "0";
        if (window.innerWidth <= 1023) {
            // tabcontent[i].style.width = window.innerWidth - 40 + 'px'
        }
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll( ".profile__tabs .tablinks" );
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace( " active", "" );
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    setTimeout( function () {
        document.getElementById( Tab ).style.opacity = "1";
        document.getElementById( Tab ).style.transform = "scale(1)";
        document.getElementById( Tab ).style.height = "100%";
    }, 300 )
    evt.currentTarget.className += " active";
}

function updatePositionPopovers() {
    let token = $( '.pop' )

    if (window.innerWidth >= 1024) {
        for (let i = 0; i < token.length; i++) {
            $( token[i] ).off( 'mouseover' )
            $( token[i] ).off( 'mouseout' )
        }
    }

    setTimeout( function () {
        let token = $( '.pop:visible' )

        for (let i = 0; i < token.length; i++) {
            let el = $( token[i] )

            if (window.innerWidth >= 1024) {
                el.off( 'mouseover' ).on( 'mouseover', function () {
                    let popover = $( this ).find( '.popover' )
                    let h = popover.outerHeight()
                    let x = $( this ).offset().left - 92
                    let y = $( this ).offset().top - 20 - h
                    popover.css( {
                        opacity: '1',
                        visibility: 'visible',
                        left: x + 'px',
                        top: y + 'px'
                    } )
                } )

                el.off( 'mouseout' ).on( 'mouseout', function () {
                    $( this ).find( '.popover' ).attr( 'style', '' )
                } )
            }
        }
    }, 350 )
}

function openTabModal(evt, Tab) {
    var i, tabcontent, tablinks;
    let modal = document.querySelector( '#levelProgress .modal' )

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll( "#levelProgress .tabcontent" );
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.transition = ".3s";
        tabcontent[i].style.opacity = "0";
        tabcontent[i].style.transform = "scale(.95)";
        tabcontent[i].style.position = "fixed";
        if (window.innerWidth >= 1024) {
            tabcontent[i].style.width = "424px"
            modal.style.height = 263 + tabcontent[i].offsetHeight + 'px'
        }
        if (window.innerWidth <= 1023) {
            modal.style.height = tabcontent[i].offsetHeight + 'px'
            tabcontent[i].style.transition = ".3s";
            tabcontent[i].style.opacity = "0";
            tabcontent[i].style.transform = "scale(.95)";
        }
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll( "#levelProgress .tablinks" );
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace( " active", "" );
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    setTimeout( function () {
        document.getElementById( Tab ).style.opacity = "1";
        document.getElementById( Tab ).style.transform = "";
        document.getElementById( Tab ).style.position = "relative";
        if (window.innerWidth >= 1024)
            modal.style.height = 263 + document.getElementById( Tab ).offsetHeight + 'px'
    }, 300 )

    updatePositionPopovers()

    if (window.innerWidth <= 1023) {
        modal.style.height = 242 + document.getElementById( Tab ).offsetHeight + 'px'
    }
    evt.currentTarget.className += " active";

    let progressbar = document.querySelector( '.progressbar div' )
    let tokens = document.querySelectorAll( '.level-progress__tab .tokens' )
    for (let el of tokens) {
        el.onscroll = function () {
            let winWidth = el.children[1].offsetWidth - el.offsetWidth + 20
            let bar = el.scrollLeft / winWidth * 100
            progressbar.style.width = bar + '%'
        }
    }

}

function openFoll(evt, Tab) {

    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll( ".followers .tabcontent" );
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.transition = ".3s";
        tabcontent[i].style.opacity = "0";
        tabcontent[i].style.transform = "scale(.95)";
        tabcontent[i].style.position = "fixed";
        if (window.innerWidth <= 1023) {
            // tabcontent[i].style.width = window.innerWidth - 40 + 'px'
        }
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll( ".followers .tablinks" );
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace( " active", "" );
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    setTimeout( function () {
        document.getElementById( Tab ).style.opacity = "1";
        document.getElementById( Tab ).style.transform = "scale(1)";
        document.getElementById( Tab ).style.position = "relative";
    }, 300 )
    evt.currentTarget.className += " active";
}

let defaultOpen = document.getElementById( "defaultOpen" )
if (defaultOpen !== null) defaultOpen.click()


let defaultOpen2 = document.getElementById( "defaultOpen2" )
if (defaultOpen2 !== null) defaultOpen2.click()


let showPs = false

function showBtnPs() {
    if (window.innerWidth >= 1024) { // pc
        showPs = !showPs
        let btns = $('.hide-buttons')
        let show = document.querySelector( '.show-all' )

        if (showPs) {
            btns.height(64)
            show.innerHTML = 'Hide'
            show.style.opacity = '.4'
        } else {
            btns.height(0)
            show.innerHTML = 'Show all'
            show.style.opacity = ''
        }
    } else { // mobile
        openModal( gamertags )
    }
}

let arrBtnFollowers = document.querySelectorAll( '.followers__btn' )
let onBtnFollowers = []
for (let i = 0; i < arrBtnFollowers.length; i++) {
    let btnFollowers = arrBtnFollowers[i]
    btnFollowers.addEventListener( 'click', function () {
        onBtnFollowers[i] = !onBtnFollowers[i]
        if (onBtnFollowers[i]) {
            arrBtnFollowers[i].style.backgroundColor = '#100F15'
            arrBtnFollowers[i].innerHTML = 'Following'
        } else {
            arrBtnFollowers[i].style.backgroundColor = ''
            arrBtnFollowers[i].innerHTML = 'Follow'
        }
    } )
}

let followersTab = document.querySelector( '#followersTab' )
let followingTab = document.querySelector( '#followingTab' )
let followers = document.querySelector( '.followers' )
let profile = document.querySelector( '.profile-col2' )

function followPage(x) {
    body.style.background = '#000'
    body.style.transition = '0s'
    profile.style.display = 'none'
    followers.style.display = 'block'
    x.click()
}

function backProfile() {
    profile.style.display = ''
    followers.style.cssText = ''
    body.style.cssText = ''
}


function openTabPatie(evt, Tab) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll( ".partie-tab .tabcontent" );
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.transition = ".3s";
        tabcontent[i].style.opacity = "0";
        tabcontent[i].style.transform = "scale(.95)";
        tabcontent[i].style.position = "fixed";
        if (window.innerWidth <= 1023) {
            // tabcontent[i].style.width = window.innerWidth - 40 + 'px'
        }
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll( ".partie-tab .tablinks" );
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace( " active", "" );
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    setTimeout( function () {
        document.getElementById( Tab ).style.opacity = "1";
        document.getElementById( Tab ).style.transform = "scale(1)";
        document.getElementById( Tab ).style.position = "relative";
    }, 300 )

    evt.currentTarget.className += " active";
}

let defaultOpenPartieTab = document.getElementById( "defaultOpenPartieTab" )
if (defaultOpenPartieTab !== null) defaultOpenPartieTab.click()

function openTabFeed(evt, Tab) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll( ".feed-tab .tabcontent" );
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.transition = ".3s";
        tabcontent[i].style.opacity = "0";
        tabcontent[i].style.transform = "scale(.95)";
        tabcontent[i].style.position = "fixed";
        // if (window.innerWidth <= 1023) {
        //     tabcontent[i].style.width = window.innerWidth + 'px'
        // }
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll( ".feed-tab .tablinks" );
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace( " active", "" );
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    setTimeout( function () {
        document.getElementById( Tab ).style.opacity = "1";
        document.getElementById( Tab ).style.transform = "scale(1)";
        document.getElementById( Tab ).style.position = "relative";
    }, 300 )
    evt.currentTarget.className += " active";

    // if ($('.slider.slick-initialized').length) {
    setTimeout( function () {
        try {
            $( '.slider' ).slick( 'unslick' )
        } catch (e) {

        }

        $( '.slider' ).slick( {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        } )
    }, 300 )
    // }
}


let defaultOpenFeedTab = document.getElementById( "defaultOpenFeedTab" )
if (defaultOpenFeedTab !== null) defaultOpenFeedTab.click()


function showBtnGametrag(el) {
    let btnNext = el.parentElement.children[el.parentElement.children.length - 1]
    if (el.value.length) {
        btnNext.style.cssText = 'visibility: visible; opacity: 1;'
    } else btnNext.style.cssText = ''
}


if (window.innerWidth <= 1023) {
    let onPhoto = false
    let editPhoto = document.querySelector( '#editPhoto' )
    let photoAvatar = document.querySelector( '#photoAvatar' )
    if (photoAvatar !== null)
        photoAvatar.onclick = function () {
            event.preventDefault()
            onPhoto = !onPhoto
            if (onPhoto) event.preventDefault()
            editPhoto.style.zIndex = '2'
            editPhoto.style.opacity = '1'
            editPhoto.children[0].style.bottom = '0'

        }
    window.onclick = function (e) {
        if (e.target === editPhoto) {
            editPhoto.style.cssText = ''
            editPhoto.children[0].style.bottom = ''
        }
    }
}


let indexToken
let tokenMobiles = document.querySelectorAll( '#Tokens .tokens-mobile .token' )
for (let i = 0; i < tokenMobiles.length; i++) {
    let tokenMobile = tokenMobiles[i]
    tokenMobile.onclick = function () {
        indexToken = i
        openModal( levelProgressToken )

        $( '#levelProgressToken .modal__content' ).slick( {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
        } );
        $( '#levelProgressToken .modal__content' ).slick( 'slickGoTo', indexToken, true );
    }
}

let indexAchivements
let achivementsMobiles = document.querySelectorAll( '#Achivements .tokens-mobile .token' )
for (let i = 0; i < achivementsMobiles.length; i++) {
    let achivementsMobile = achivementsMobiles[i]
    achivementsMobile.onclick = function () {
        indexAchivements = i
        openModal( levelProgressAchivements )

        $( '#levelProgressAchivements .modal__content' ).slick( {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
        } );
        $( '#levelProgressAchivements .modal__content' ).slick( 'slickGoTo', indexAchivements, true );
    }
}


let onMoney
let showText = document.querySelector('.progress_text__show')
let showMoney = document.querySelector('.progress_text__money')
function showProgress() {
    onMoney = !onMoney
    if(onMoney) {
        showText.style.display = 'none'
        showMoney.parentElement.children[2].style.display = 'block'
    } else {
        showText.style.display = ''
        showMoney.parentElement.children[2].style.display = ''
    }

}






