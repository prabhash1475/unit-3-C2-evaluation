// Add the coffee to local storage with key "coffee"
// const url = "https://masai-mock-api.herokuapp.com/coffee/menu"

// fetch(url)
//     .then(function (res) {
//         console.log('res:', res)
//         return res.json();
//     })
//     .then(function (res) {
//         console.log('res:', res)
//         console.log(res)
//         var product = res.data
//         console.log('product:', product)


//         display(product)
//     });



// // var arr = []

// function display(data) {
//     // document.querySelector("#menu").innerHTML = "";
//     data.map(function (data) {
//         var div = document.createElement('div');

//         var img = document.createElement('img')
//         img.src = data.image

//         var title = document.createElement('p')
//         title.innerText = data.title;

//         var price = document.createElement('p')
//         price.innerText = data.price





//         div.append(img, title, price)
//         document.getElementById("menu").append(div)
//     })
// }



/*-----------------------*/


let count = 0;

let cartArray = JSON.parse(localStorage.getItem("coffee")) || []

menuFood()
async function menuFood() {
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/coffee/menu`)

        let data = await res.json()

        let final = data.menu.data
        console.log('final:', final)
        appendData(final)
    }
    catch (err) {
        console.log('err:', err)

    }
}

function appendData(final) {
    final.map(function (elem) {
        var div = document.createElement('div');

        var img = document.createElement('img')
        img.src = elem.image

        var title = document.createElement('p')
        title.innerText = elem.title;

        var price = document.createElement('p')
        price.innerText = elem.price

        var btn = document.createElement('button')
        btn.innerText = "Add to Basket"
        btn.addEventListener("click", function () {
            addTobasket(elem)
        })



        div.append(img, title, price, btn)
        document.getElementById("menu").append(div)


    })
    var length = cartArray.length;
    console.log(length)
    var count = document.getElementById("coffee_count")
    count.innerText = length

    function addTobasket(data) {
        // console.log(data)
        cartArray.push(data)
        localStorage.setItem("coffee", JSON.stringify(cartArray))
        window.location.reload()
    }
}