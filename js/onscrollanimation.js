$(function () {
    function scrollJack(element, boolean) {
        let elementTop = element.offset().top
        let scrollTop = $(window).scrollTop()
        let windowHeight = $(window).height()
        if (scrollTop + windowHeight >= elementTop) {
            let offset = scrollTop - elementTop + windowHeight
            if(boolean) {
                element.css("background-position", `${-offset / 2}px`)
            } else {
                element.css("transform", `translateX(${-offset}px)`)
            }
        }
    }
    $(window).on("scroll", function () {
        scrollJack($(".fourthContent p"), false)
        scrollJack($(".seventh"), true)
    })
})
