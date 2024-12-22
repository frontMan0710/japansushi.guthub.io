$(function () {
    let $strip = $(".fourthContent")
    let $vawes = $(".seventh")
    let stripTop = $strip.offset().top
    let vawesTop = $vawes.offset().top
    const scrollTop = $(window).scrollTop()
    const windowHeight = $(window).height()
    let sOffset = scrollTop - stripTop + windowHeight
    let vOffset = scrollTop - vawesTop + windowHeight
    $strip.find("p").css("transform", `translateX(${-sOffset}px)`)
    $vawes.css("background-position", `${-vOffset - 5}px`)
    $(window).on("scroll", function () {
        let scrollTop = $(window).scrollTop()
        let windowHeight = $(window).height()
        if (scrollTop + windowHeight >= stripTop) {
            let offset = scrollTop - stripTop + windowHeight
            $strip.find("p").css("transform", `translateX(${-offset}px)`)
        }
        if (scrollTop + windowHeight >= vawesTop) {
            let offset = scrollTop - vawesTop + windowHeight
            $vawes.css("background-position", `${-offset / 2}px`)
        }
    })
})
