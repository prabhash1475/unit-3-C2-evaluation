document.querySelector('form').addEventListener("submit", checkout)

function checkout(event) {
    event.preventDefault()


    alert("Your Order is accepted")

    setTimeout(function () {
        alert("Your order is being pickup")
    }, 3000)

    setTimeout(function () {
        alert("Your order is in transit")
    }, 8000)

    setTimeout(function () {
        alert("Your order is out for Delevery")
    }, 10000)

    setTimeout(function () {
        alert("Your order isDeleverd")
    }, 12000)
}