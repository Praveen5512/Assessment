let arrObj = [
    { imgUrl: "./assets/cdDrive.jpg", name: "CD Drive", price: 2000 },
    { imgUrl: "./assets/cpu.png", name: "CPU", price: 3000 },
    { imgUrl: "./assets/laptop.jpg", name: "Laptop", price: 5000 },
    { imgUrl: "./assets/pendrive.jpg", name: "Pendrive", price: 1000 },
    { imgUrl: "./assets/ssd.jpg", name: "SSD", price: 2000 },
    { imgUrl: "./assets/watch.jpg", name: "Watch", price: 4000 },
    { imgUrl: "./assets/phone.jpg", name: "Smartphone", price: 10000 },
    { imgUrl: "./assets/computer.jpg", name: "Computer", price: 30000 },
    { imgUrl: "./assets/tab.jpg", name: "Tab", price: 10000 },
    { imgUrl: "./assets/mouse.jpg", name: "Mouse", price: 300 },
    { imgUrl: "./assets/keyboard.jpg", name: "Keyboard", price: 600 },
    { imgUrl: "./assets/headphone.jpg", name: "Headphone", price: 800 }
]
let arrCart = [];
let index1 = 0;
let total = 0;
let avail = 150000;
function mainPage() {
    for (let i = 0; i < arrObj.length; i++) {
        $("#products").append(
            `<div class="col-12 col-sm-6 col-md-6 col-lg-4 mx-auto">
                <div class="items">
                    <div class="card" style="width: 18rem;">
                        <img src="${arrObj[i].imgUrl}" class="card-img-top cardSize" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${arrObj[i].name}</h5>
                            <p class="card-text">Price : ₹ ${arrObj[i].price} </p>
                            
                        </div>

                        <div class="row my-2">
                            <input type="number" class="inputTags" max=5 min=0>
                        </div>
                        <div class="row">
                            <button  class="btn btn-primary addToCart" value=${index1}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>`
        )
        index1++;
    }
}
mainPage();
function cart(imgurl, head, price, quantity) {
    return `<div class="col-12 col-sm-6 col-md-6 col-lg-4">
                <div class="items cartItems">
                    <div class="card" style="width: 18rem;">
                        <img src="${imgurl}" class="card-img-top cardSize" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${head}</h5>
                            <p class="card-text">Price : ₹ ${price} </p>
                            <p class="card-text">QTY :  ${quantity} </p>
                        </div>
                    </div>
                </div>
            </div>`
}
$("#goCart").on('click', function () {
    for (let i = 0; i < arrCart.length; i++) {
        let index = arrCart[i].index;
        let quantity = arrCart[i].quantity;
        let price = arrObj[index].price * quantity;
        total = total + price;
        $("#cart").append(cart(arrObj[index].imgUrl, arrObj[index].name, price, quantity))
    }
    $("#checkout").fadeIn(1);
    $("#cart").fadeIn(1);
    $(this).fadeOut(1);
    $("#products").fadeOut(1)
    $("#total").html(total);
    $("#payment").html("");

})
$(".addToCart").on('click', function () {
    let btnVal = $(this).val();
    let inpVal = $(".inputTags").eq(btnVal).val();
    if (inpVal > 0) {
        arrCart.push({ index: btnVal, quantity: inpVal });
    }
    $(".inputTags").eq(btnVal).val("")
})
$("#checkout").fadeOut(1);
$("#backbtn").on('click', function () {
    $("#products").fadeIn(1);
    $("#checkout").fadeOut(1);
    $("#cart").fadeOut(1);
    $("#cart").html("");
    arrCart = [];
    total = 0;
    $("#goCart").fadeIn(1);
    avail = 150000;

})

$("#paybtn").on('click', function () {
    $("#payment").html("");
    if (total < avail) {
        let valuee = "Payment Successful"
        avail = avail - total;
        $("#payment").append(
            `<div class="row">
                <h1 class="text-success">${valuee}</h1>
                <h1>Available Balance : ${avail}</h1>
                
            </div>`
        )
    }
    else {
        let valuee = "Insufficient balance"
        $("#payment").append(
            `<div class="row">
                <h1 class="text-danger">${valuee}</h1>
                <h1>Available Balance : ${avail}</h1>
            </div>`
        )
    }
})



