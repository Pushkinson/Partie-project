$(function () {
    let modals = document.querySelectorAll( '.modal' )
    for (let modal of modals) {
        if (window.innerWidth <= 1023 &&
            modal.parentElement !== hostLiveShowMobile &&
            modal.parentElement !== hostPartie &&
            modal.parentElement !== createShortcutMobile &&
            modal.parentElement !== editPartie &&
            modal.parentElement !== newChat &&
            modal.parentElement !== changePaymentMethod &&
            modal.parentElement !== chooseGame &&
            modal.parentElement !== signUpPage &&
            modal.parentElement !== logInIn &&
            modal.parentElement !== resetPass &&
            modal.parentElement !== checkEmail &&
            modal.parentElement !== welcomeMobile &&
            modal.parentElement !== newPost &&
            modal.parentElement !== preferencesModal &&
            modal.parentElement !== titleModal &&
            modal.parentElement !== profileProgress &&
            modal.parentElement !== chooseGameSettings &&
            modal.parentElement !== settingsPlatforms &&
            modal.parentElement !== inviteFriends &&
            modal.parentElement !== editProfile &&
            modal.parentElement !== editShortcutMobile) {
            $( function () {
                $( modal ).swipe( {
                    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                        if (direction === 'down') {
                            closeModal( modal.parentElement )
                        }
                    },
                    allowPageScroll: "horizontal"
                } )
            } )
        }
    }


    let btnContainerWrapps = document.querySelectorAll( '.btn-container-wrapp' )
    for (let el of btnContainerWrapps) {
        if (window.innerWidth <= 1023) {
            $( function () {
                $( el.children[0] ).swipe( {
                    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                        if (direction === 'down') {
                            el.style.top = ''
                            el.children[0].classList.add( 'animate__fadeOutDownBig' )
                            el.children[0].classList.remove( 'animate__fadeInUp' )
                        }
                    }
                } )
            } )
        }
    }


    let postMenus = document.querySelectorAll( '.post-menu.mobile' )
    for (let postMenuMenu of postMenus)
        if (window.innerWidth <= 1023) {
            $( function () {
                $( postMenuMenu.children[0] ).swipe( {
                    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                        if (direction === 'down') {
                            postMenuMenu.style.cssText = ''
                            postMenuMenu.children[0].style.cssText = ''
                            body.style.overflow = ''
                        }
                    }
                } )
            } )
        }


    if (window.innerWidth <= 1023) {
        $( function () {
            $( "#hostPartie .shortcuts" ).swipe( {
                swipe: function (event, direction, distance, duration, fingerCount, fingerData) {

                    if (direction === 'up') {
                        shortcutsUp()
                    } else if (direction === 'down') {
                        shortcutsDown()
                    }
                }
            } )
        } )
    }


    let profileProgressModal = document.querySelector( '#profileProgress .modal' )
    let closeTap = document.querySelector( '#profileProgress .close-tap' )
    if (window.innerWidth <= 1023) {
        $( function () {
            $( "#profileProgress .close-tap-wrapp" ).swipe( {
                swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                    $( profileProgressModal ).swipe( {allowPageScroll: "auto"} );

                    if (direction === 'up') {
                        if (profileProgressModal.offsetTop !== 0) {
                            $( profileProgressModal ).swipe( {allowPageScroll: "auto"} );
                            profileProgressModal.children[2].style.height = 'calc(100vh - 154px)'
                            profileProgressModal.style.backgroundColor = '#17171a'
                            profileProgressModal.classList.add( 'modal-arrow' )
                            closeTap.style.opacity = '0'
                        }

                    } else if (direction === 'down') {
                        if (profileProgressModal.offsetTop !== 0) closeModal( profileProgress )
                        if (profileProgressModal.children[2].scrollTop === 0) {
                            profileProgressModal.children[2].style.cssText = ''
                            profileProgressModal.style.backgroundColor = ''
                            profileProgressModal.classList.remove( 'modal-arrow' )
                            closeTap.style.opacity = ''
                        }
                    }
                }
            } )
        } )
    }
})