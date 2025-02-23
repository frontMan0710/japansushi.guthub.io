$(function () {
    let $burger = $("#burgerIcon")
    let $menu = $("nav.links")

    $burger.on("click", () => {
        $burger.toggleClass("active")
        $menu.toggleClass("active")
        //$("body").toggleClass("lock")
    })
})
