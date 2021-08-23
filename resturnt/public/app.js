
let admin= () => {

    alert("working")
    var Susername = document.getElementById('name-one').value
    var Suseremail = document.getElementById('email-three').value
    var Susernumber = document.getElementById('number-three').value
    var Susercountry = document.getElementById('country').value
    var Susercity = document.getElementById('city').value
    var Suserpassword = document.getElementById('pass-three').value
    var adminname="admin"
    let user = {
        Suseremail,
        Susername,
        Susernumber,
        Susercity,
        Susercountry,
        adminname,
    }
    firebase.database().ref('Users').child(Susername).set(user)
    // console.log(user)
    firebase.auth().createUserWithEmailAndPassword(Suseremail, Suserpassword)
        .then((data) => {
            setTimeout(() => {
                window.location = "login.html"
            }, 4000);

            add()
            console.log(data)
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}



let signup = () => {

   
        alert("working")
        var Eusername = document.getElementById('name').value
        var Euseremail = document.getElementById('email').value
        
        var Euserpassword = document.getElementById('pass').value
        let user = {
            Euseremail,
            Eusername,
        
        }
        firebase.database().ref('Users').child(Eusername).set(user)
        console.log(user);
    // console.log(email,password)
    firebase.auth().createUserWithEmailAndPassword(Euseremail,Euserpassword)
        .then((data) => {
            setTimeout(() => {
                window.location = "login.html"
            }, 4000);
            
            add()
            console.log(data)
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}


let login = () => {

    var email = document.getElementById("email-two").value
    var password = document.getElementById("pass-two").value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((data) => {
            var user = data.user
            localStorage.setItem("email", user.email)
            // add()
            let get = () => {
                firebase.database().ref('user').on('value', (data) => {
                    localStorage.setItem("user", JSON.stringify(data.val()));
                    console.log(data.val)
                })
            }
            window.location="index.html"
         
            
            console.log(user)
            alert('you are login')
            
        
        })

        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
            alert(errorMessage)
        });
}


let send = () => {

    var email = document.getElementById("email-four").value
    var password = document.getElementById("pass-four").value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((data) => {
            var user = data.user
            localStorage.setItem("email", user.email)
            // add()
            window.location ="panel.html"
            console.log(user)
            alert('you are login')

        })

        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
            alert(errorMessage)
        });
}





let products = [
    {
        name: "chineese",
        price: 900,
        image:"data:image/jpeg;base64,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"

    },
    {
        name: "fast food",
        price: 300,
        image:"https://i2.wp.com/dinepartner.com/blog/wp-content/uploads/2019/12/fastfood.jpg?fit=750%2C342&ssl=1"

    },
    {
        name: "bbq",
        price: 350,
        image: "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2013/08/01/1b/bbq-festivals_ss_001.rend.hgtvcom.966.644.suffix/1491592568029.jpeg"

    },
    {
        name: "bbq",
        price: 350,
        image: "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2013/08/01/1b/bbq-festivals_ss_001.rend.hgtvcom.966.644.suffix/1491592568029.jpeg"

    },
]

let main = document.getElementById('products');

for (var i = 0; i < products.length; i++) {
    main.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${products[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${products[i].name}</h5>
        <p class="card-text">${products[i].price} rs</p>
        <a href="#" onclick='addToCart("${products[i].name}","${products[i].price}","${products[i].image}")' class="btn btn-primary">ADD TO CART</a>
    </div>
</div>
    `
}

let allCarts = [];
let carts = localStorage.getItem('carts')

if (carts !== null) {
    allCarts = JSON.parse(carts)
    let cart_badge = document.getElementById('cart_badge');
    cart_badge.innerHTML = allCarts.length
}

function addToCart(name, price, image) {
    let cart = {
        name,
        price,
        image
    }
    allCarts.push(cart)
    localStorage.setItem('carts', JSON.stringify(allCarts))
    let cart_badge = document.getElementById('cart_badge');
    cart_badge.innerHTML = allCarts.length
}
let get = () => {
    firebase.database().ref('user').on('value', (data) => {
        firebasebe.setItem("user", JSON.stringify(data.val()));
        // console.log(data.val)
        var key = (Math.random() * 92476829).toFixed()
        firebase.database().ref("orders/" + "id" + key).set(obj)

        alert("product added successfully")
        window.location.href = "./orders.html"
    })
}


function get1() {
    alert("your order is placed")
    console.log("You have ordered")
    console.log(a.productname)
    console.log(a.productprice)
    console.log(a.producttype)

    document.getElementById("order1").innerHTML += `
    You have ordered
    localStorage.getItem(data)
    `
    localStorage.setItem("data", a.productname)
}




function showitems() {


    firebase.database().ref("orders").on('child_added', function (data) {
        a = data.val()
        // console.log(a)

        document.getElementById("cart_badge").innerHTML +=
            `<div class="card" style="width: 18rem;">
         <img id="img"
             src="${a.url}"
             class="card-img-top" alt="Burger">
         <div class="card-body">
             <h3 id="pname" class="card-text">${a.productname}</h3>
             <h5 id="price" class="card-text">${a.productprice}</h5>
             <h5 id="type" class="card-text">${a.producttype}</h5>
             <button onclick={abc()} class="btn btn-primary">Order</button>
         </div>
     </div>`


    })

}

showitems()


function yourproducts() {

    firebase.database().ref("orders").on('child_added', function (data) {
        a = data.val()
        // console.log(a)
        document.getElementById("cart_badge").innerHTML +=
            `<div class="card" style="width: 18rem;">
         <img id="img"
             src="${a.url}"
             class="card-img-top" alt="Burger">
         <div class="card-body">
             <h3 id="pname" class="card-text">${a.productname}</h3>
             <h5 id="price" class="card-text">${a.productprice}</h5>
             <h5 id="type" class="card-text">${a.producttype}</h5>
         </div>
     </div>`

    })

}














































































































