// click chuyển slide
const clickProducts = document.querySelectorAll('.info-product');
const displayProducts = document.querySelectorAll('.info');
// thêm sự kiện click
clickProducts.forEach((clickProduct , index) =>{
    clickProduct.addEventListener('click', function() {
        clickProducts.forEach((el) => el.classList.remove('.active'));
        displayProducts.forEach((displayProduct) => displayProduct.style.display = 'none');
        clickProduct.classList.add('.active');
        displayProducts[index].style.display='block';
    });
});

// click vào mua ngay

const buyProduct = document.querySelector(".buy button");
const formBuy = document.querySelector(".address-product");
buyProduct.addEventListener("click", function(){
    buyProduct.classList.add("active");
    formBuy.style.display = 'block';

});
// click đóng
const closeBuy = document.querySelector(".icon-close");
buyProduct.addEventListener("click", function() {
    var overlay = document.querySelector('.overlay');
    overlay.style.display= 'block';
});
closeBuy.addEventListener("click", function () {
    var close = document.querySelector('.address-product');
    close.style.display = "none";
    var overlay = document.querySelector('.overlay');
    overlay.style.display= 'none';
});


// lấy thông tin từ localStorage
var productImg = localStorage.getItem('productImg');
var productName = localStorage.getItem('productName');
var productPrice = localStorage.getItem('productPrice');
var aboutProduct = localStorage.getItem('aboutProduct');
// var productInfo = localStorage.getItem('productInfo');
var info = localStorage.getItem('info');
// var formProduct = localStorage.getItem('formProduct');
// cập nhật thông tin
document.getElementById("product-img").src = productImg;
document.getElementById('product-name').innerText = productName;
document.getElementById('product-price').innerText = productPrice;
document.getElementById('product-about').innerText = aboutProduct;
// document.querySelector('.product-info').innerText = productInfo;
document.getElementById('info-product').innerText = info;
// document.getElementById('form-buy').innerText = formProduct;



// click sự kiện
