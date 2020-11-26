function hiddenPeople() {
    let people = document.querySelector( '.feed__col3 > div' )
    let feedHeader = document.querySelector( '.feed__col3 .feed__header' )
    let peopleBtn = document.querySelector( '.feed__people-btn' )
    let feedRequestTitle = document.querySelector( '.feed__request_title' )

    if (people.style.transform !== '') {
        people.style.transform = ''
        feedHeader.style.opacity = ''
        peopleBtn.style.transform = ''
        if(feedRequestTitle) feedRequestTitle.style.transform = ''

    } else {
        if(feedRequestTitle) feedRequestTitle.style.transform = 'translateX(-25px)'
        people.style.transform = 'translateX(196px)'
        feedHeader.style.opacity = '0'
        peopleBtn.style.transform = 'rotateY(180deg)'
    }
}

let textarea = document.querySelector( '#whatNewHead' )
let feedWhatNew = document.querySelector( '.feed__what-new' )
let textSelect = document.querySelector( '#whatNewHead + div' )
let feedWhatNewRow = document.querySelector( '.feed__what-new_row' )
let photo1 = document.querySelector( 'label[for=photo-1]' )
let feedWhatNewHead = document.querySelector( '.feed__what-new_head' )


if (feedWhatNew !== null) {
    feedWhatNew.addEventListener( 'click', function (e) {
        if (e.target === photo1.parentElement.children[1]) {
            e.stopPropagation()
        } else {
            textSelect.style.right = '65%'
            photo1.style.cssText = 'opacity: 0; visibility: hidden;'
            textarea.style.width = '100%'
            textarea.style.marginTop = '34px'
            textarea.style.marginBottom = '70px'
            feedWhatNewHead.parentElement.style.backgroundColor = 'rgba(20,19,26,1)'
            setTimeout( function () {
                feedWhatNewRow.style.cssText = 'opacity: 1; visibility: visible;'
            }, 350 )

            if (window.innerWidth <= 1300) textSelect.style.right = '51%'
        }
    } )

    window.addEventListener( 'click', function (e) {
        if (!feedWhatNewHead.parentNode.contains( e.target ) && !feedWhatNewHead.children[0].value.length) {
            textSelect.style.right = ''
            feedWhatNewRow.style.cssText = ''
            photo1.style.cssText = ''
            textarea.style.cssText = ''
            feedWhatNewHead.style.flexWrap = ''
            feedWhatNewHead.parentElement.style.backgroundColor = ''
        }
    } )
}


function loading() {
    let loading = document.querySelector( '.loading' )
    loading.style.display = 'flex'
}

function showBtnPost(text) {
    let btn = document.querySelector( '.feed__what-new .feed__what-new_post' )
    if (text.value) {
        btn.style.opacity = '1'
        btn.style.visibility = 'visible'
    } else btn.style.cssText = ''
}


function isNewComment() {
    let newCommentPeoples = document.querySelectorAll( '.comments__new-comment_people' )
    let newComments = document.querySelectorAll( '.newComment' )
    let newCommentBtns = document.querySelectorAll( '.newCommentBtn' )
    for (let i = 0; i < newCommentPeoples.length; i++) {
        let newCommentPeople = newCommentPeoples[i]
        let newComment = newComments[i]
        let newCommentBtn = newCommentBtns[i]

        if (newComment.value.length) {
            newCommentBtn.style.visibility = 'visible'
        } else {
            newCommentBtn.style.visibility = ''
        }

        if (newComment.value === '@') {
            newCommentPeople.style.display = 'flex'
        } else {
            newCommentPeople.style.display = ''
        }

        if (window.innerWidth < 1300) {
            newCommentBtn.innerHTML = ''
        }
    }

}


let replyBtns = document.querySelectorAll( '.reply' )
let replyNewComments = document.querySelectorAll( '.comments__comment .comments__new-comment' )

for (let i = 0; i < replyBtns.length; i++) {
    let replyBtn = replyBtns[i]
    let replyNewComment = replyNewComments[i]

    if (replyNewComment) {
        replyNewComment.style.overflow = 'hidden'
        replyNewComment.style.opacity = '0'
        replyNewComment.style.height = '0'
        replyNewComment.style.margin = '0'

        replyBtn.onclick = function () {
            replyNewComment.style.cssText = ''
        }
    }
}


let partieTab = document.querySelector( '.feed__col2.partie-tab' )
let newActivePartie = document.querySelector( '.new-active-partie' )
let mobileNav = document.querySelector( '.mobile-nav.mobile' )

function openActivePartie() {
    partieTab.style.display = 'none'
    mobileNav.style.display = 'none'
    newActivePartie.style.display = 'flex'
}

function clickTab(open, close) {
    open.style.display = 'block'
    close.style.display = 'none'

    setTimeout( function () {
        open.children[1].style.display = 'block'
        open.children[1].style.opacity = '1'
        open.children[1].style.transform = 'scale(1)'
    }, 100 )

    close.children[1].style.opacity = '0'
    close.children[1].style.transform = 'scale(.95)'
    setTimeout( function () {
        close.children[1].style.display = 'none'
    }, 100 )

    try {
        $( '.slider' ).slick( 'unslick' )
    } catch (e) {

    }

    $( '.slider' ).slick( {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
    } )
}

function openChat() {
    let newChatPage = document.querySelector( '.new-active-partie.chat' )
    let chatPage = document.querySelector( '.chats' )
    closeModal( newChat )
    chatPage.style.display = 'none'
    newChatPage.style.display = 'flex'
}


$( '.share__btns' ).slick( {
    slidesToScroll: 1,
    slidesToShow: 5,
    infinite: false,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 4
            }
        }
    ]
} )


let closePlaceMobile = document.querySelector( '.close-place.post-menu.mobile' )
if (window.innerWidth <= 1023) {
    let commBtn = document.querySelector( '.feed__comments .comments__new-comment button' )
    if (commBtn !== null) commBtn.innerHTML = ''

    for (let feedHeaderMenu of arrFeedHeaderMenu) {
        feedHeaderMenu.onclick = function () {
            body.style.overflow = 'hidden'
            closePlaceMobile.style.zIndex = '1'
            closePlaceMobile.style.opacity = '1'
            closePlaceMobile.children[0].style.bottom = '0'
        }
        if (closePlaceMobile !== null)
            closePlaceMobile.onclick = function (e) {
                if (e.target === closePlaceMobile || e.target === closePlaceMobile.children[0].children[1]) {
                    closePlaceMobile.style.cssText = ''
                    closePlaceMobile.children[0].style.bottom = ''
                    body.style.overflow = ''
                }
            }
    }
}


let publicPost = document.querySelector( 'button.public-post' )
let onPublicPost

if (publicPost !== null)
    publicPost.onclick = function () {
        onPublicPost = !onPublicPost
        if (onPublicPost) {
            publicPost.style.background = 'rgba(235,235,245,.1) url(../img/icon/lock.svg) 12px 50%/11px 12px no-repeat'
            publicPost.style.paddingLeft = '30px'
            publicPost.style.transition = 'background-color .3s'
            publicPost.innerHTML = 'Followers only'
        } else {
            publicPost.style.paddingLeft = ''
            publicPost.style.background = ''
            publicPost.innerHTML = 'Public post'
        }
    }

let publicPostPopup = document.querySelector( 'button.public-post-popup' )
let onPublicPostPopup

if (publicPostPopup !== null)
    publicPostPopup.onclick = function () {
        onPublicPostPopup = !onPublicPostPopup
        if (onPublicPostPopup) {
            publicPostPopup.className = 'public-post-popup followers-only-btn'
            publicPostPopup.innerHTML = 'Followers only'
        } else {
            publicPostPopup.className = 'public-post-popup bg-fiolet'
            publicPostPopup.innerHTML = 'Public post'
        }
    }


let comments = document.querySelectorAll( '.comments > .comments__comment' )
let btnComments = document.querySelectorAll( '.comments__show-more' )


for (let i = 0; i < comments.length; i++) {
    let comment = comments[i]
    let btnComment = btnComments[i]

    let replyBoxs = comment.querySelectorAll( '.reply-box' )
    for (let replyBox of replyBoxs) {
        replyBox.style.opacity = '0'
        replyBox.style.height = '0'
        replyBox.style.overflow = 'hidden'
        replyBoxs[0].style.cssText = ''
    }

    btnComment.onclick = function () {
        this.style.display = 'none'
        for (let replyBox of replyBoxs)
            replyBox.style.cssText = ''
    }
}

// newCommentBtn

function newMessChat(text) {
    let btnSend = text.parentElement.children[2]
    if (text.value) {
        btnSend.style.opacity = '1'
        btnSend.style.visibility = 'visible'
    } else btnSend.style.cssText = ''
}




