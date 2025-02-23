$(function () {
    const products = new Object({
        1: {
            title: "Мейро маки",
            image: "./img/prodCard.webp",
            description: "Лосось, авокадо, огурец, кунжут, майонез, рис, нори",
            weight: "220 г"
        },
        2: {
            title: "Мейро маки",
            image: "./img/prodCard.webp",
            description: "Лосось, авокадо, огурец, кунжут, майонез, рис, нори",
            weight: "210 г"
        },
        3: {
            title: "Мейро маки",
            image: "./img/prodCard.webp",
            description: "Лосось, авокадо, огурец, кунжут, майонез, рис, нори",
            weight: "230 г"
        },
        4: {
            title: "Мейро маки",
            image: "./img/prodCard.webp",
            description: "Лосось, авокадо, огурец, кунжут, майонез, рис, нори",
            weight: "280 г"
        },
    })

    let $modal = $(".modalWrapper")

    $(".openModal").on("click", function () {
        let productId = $(this).data("product")
        let product = products[productId]

        $(".prodName").text(product.title)
        $(".prodPreview").attr("src", product.image)
        $(".prodDesc").text(product.description)
        $(".weight").text(product.weight)

        $modal.addClass("active")
        $("body").addClass("lock")
        lenis.stop()
    })
    $(".close").on("click", function () {
        $modal.removeClass("active")
        $("body").removeClass("lock")
        lenis.start()
    })

})