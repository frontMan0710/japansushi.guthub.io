
$(function () {
    let $card = $(".prodCard")
    $card.each(function () {
        $(this).on("mousemove", function (event) {

            let size = this.getBoundingClientRect()

            let x = (event.clientX - size.left - size.width / 2) / 10
            let y = (event.clientY - size.top - size.height / 2) / 10

            $(this).css("transform", `translate(${x}px, ${y}px)`)
        })
        $(this).on("mouseleave", function () {
            $(this).css("transform", "translate(0, 0)")
        })
    })
})
