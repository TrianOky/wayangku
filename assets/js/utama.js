$(document).ready(() => {
    const navbar = $(".navbar")
    const navbarBrand = $(".navbar-brand")
    const navLink = $(".nav-link")
    const navBtn = $(".nav-btn")

    $(".navbar-toggler").on('click', () => {
        $(".animated-hamburger").toggleClass("open")
        if (!$(".navActive")[0]) {
            navbar.toggleClass("navActive")
            navbarBrand.toggleClass("navbar-brand-bk") 
            navLink.toggleClass("nav-link-bk")
            navBtn.removeClass('btn-outline-light')
            navBtn.addClass('btn-outline-dark')
            $(".animated-hamburger span").css({
                background: '#000'
            })
        } else if ($(".navActive")[0] && $(window).scrollTop() >= 0 && $(window).scrollTop() < 65) {
            navbar.toggleClass("navActive")
            navbarBrand.toggleClass("navbar-brand-bk") 
            navLink.toggleClass("nav-link-bk")
            navBtn.removeClass('btn-outline-dark')
            navBtn.addClass('btn-outline-light')
            $(".animated-hamburger span").css({
                background: '#fff'
            })
        }

    })
    $(window).scroll(() => {
        const windscroll = $(window).scrollTop()
        if (windscroll >= 65) {
            navbar.addClass("navActive")
            navbarBrand.addClass("navbar-brand-bk")
            navLink.addClass("nav-link-bk")
            navBtn.removeClass('btn-outline-light')
            navBtn.addClass('btn-outline-dark')
            $(".animated-hamburger span").css({
                background: '#000'
            })
        }
        else {
            navbar.removeClass("navActive")
            navbarBrand.removeClass("navbar-brand-bk")
            navLink.removeClass("nav-link-bk")
            navBtn.removeClass('btn-outline-dark')
            navBtn.addClass('btn-outline-light')
            $(".animated-hamburger span").css({
                background: '#fff'
            })
            $(".show")[0] ? $(".navbar-toggler").click() : false
        }
    })

})