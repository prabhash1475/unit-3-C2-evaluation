// On clicking remove button the item should be removed from DOM as well as localstorage.
var cartData = JSON.parse(localStorage.getItem("coffee"))
// console.log(cartData)

function showTotal() {
    var total = cartData.reduce(function (acc, item) {
        return acc + item.price
    }, 0)
    document.getElementById('total_amount').innerText = total
}

showTotal()




cartData.map(function (elem, index) {
    var div = document.createElement('div');

    var img = document.createElement('img')
    img.src = elem.image

    var title = document.createElement('p')
    title.innerText = elem.title;

    var price = document.createElement('p')
    price.innerText = elem.price

    var btn = document.createElement('button')
    btn.innerText = "Remove"
    btn.addEventListener("click", function () {
        removeIteam(elem, index)
    })



    div.append(img, title, price, btn)
    document.getElementById("bucket").append(div)
})

function removeIteam(elem, index) {
    cartData.splice(index, 1);
    localStorage.setItem("coffee", JSON.stringify(cartData))
    window.location.reload()
}


