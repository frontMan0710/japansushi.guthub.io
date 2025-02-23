$(function () {
    $(".tabLink").click(function () {
        let tabId = $(this).data("tab")

        $(".tabLink").removeClass("active")
        $(".tabItem").removeClass("active")

        $(this).addClass("active")
        $('.tabItem[data-content="' + tabId + '"]').addClass("active")
    })
})
