const btn = document.querySelectorAll("button");
// console.log(btn);
btn.forEach(function (button, index ) {
    button.addEventListener("click", function(event){{
        var btnItem = event.target;
        var product = btnItem.parentElement;
        // console.log(productItem);
    
        var productImg  = product.querySelector("img").src;
        // console.log(productImg);
        var productName = product.querySelector("H1").innerText;

        var productPrice = product.querySelector("span").innerText;
        addcart(productPrice, productImg,productName);
    }});
});
function addcart(productPrice, productImg,productName){
    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    for(var i=0 ; i<cartItem.length ; i++){
        var productT = document.querySelectorAll(".title");
        if(productT[i].innerHTML == productName){
            alert("Đã có hàng trong giỏ hàng");
            return;
        }
    }
    var trcontent = ' <tr><td style="display: flex; text-align: center;"><img src="'+ productImg+'" alt="" style="width: 180px"height="180px"><span class="title">'+productName+'</span></td><td><span class = "prices">'+productPrice+'</span></td><td><input style="width: 50px; outl ine: none;" type="number" value="1" min="0"></td><td style="cursor: pointer;"><span class="delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector("tbody");

    cartTable.append(addtr);
    deleteCart();
    saveCartToLocalSttorage();
    carttotal();
}   
// lưu giỏ hàng vào local
function saveCartToLocalSttorage() {
    var cartItems = document.querySelectorAll("tbody tr");
    var cartArray = [];
    
    cartItems.forEach(function (item){
        var productImg = item.querySelector("img").src;
        var productName = item.querySelector("td").textContent.trim();
        var productPrice = item.querySelector("span").innerText;
        var quantity = item.querySelector("input").value;
        

        cartArray.push({
            img: productImg,
            name: productName,
            price: productPrice,
            quantity: quantity,
          });
    });
    localStorage.setItem("cart", JSON.stringify(cartArray));
}
// tải giỏ hàng
function loadCartFromLocalStorage(){
    var carData = localStorage.getItem("cart");

    if(carData){
        var cartArray = JSON.parse(carData);
        var cartTable = document.querySelector("tbody");
        
        cartArray.forEach(function(product){
            var trcontent = ' <tr><td style="display: flex; text-align: center;"><img src="'+ productImg+'" alt="" style="width: 180px"height="180px">'+productName+'</td><td><span>'+productPrice+'</span></td><td><input style="width: 50px; outl ine: none;" type="number" value="1" min="0"></td><td style="cursor: pointer;"><span class="delete">Xóa</span></td></tr>'
            addtr.innerHTML = trcontent;
            cartTable.append(addcart); 
        });
        carttotal();
        deleteCart();
    }
}

// total price
function carttotal () {
    var cartItem  = document.querySelectorAll('tbody tr');
    var totalC = 0;
    for(var i = 0; i< cartItem.length; i++){
        var inputValue = parseFloat(cartItem[i].querySelector("input").value) || 0;
        var productPrice = parseFloat(cartItem[i].querySelector(".prices").innerHTML.replace(/\./g, '').replace(',', '.')) || 0;
        var totalA = inputValue * productPrice*1000;
    
        var totalC = totalC + totalA;
        var totalD = totalC.toLocaleString('de-DE');
    }
    var carttotalA = document.querySelector('.price-total span');
    var cartPrice = document.querySelector(".cart-icon span")
    cartPrice.innerHTML = totalC.toLocaleString('de-DE');
        carttotalA.innerHTML = totalD;
        console.log(totalC);
        inputchange();
}



// -----------Xóa
function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".delete");
        productT[i].addEventListener('click', function(event) {
            var cartDelete = event.target;
            var cartitemR = cartDelete.closest("tr"); // Tìm phần tử tr gần nhất
            cartitemR.remove(); // Xóa phần tử tr

            // Cập nhật tổng giá trị giỏ hàng sau khi xóa
            carttotal();

            // Lưu lại giỏ hàng vào localStorage
            saveCartToLocalSttorage();
        });
    }
}
// 
function inputchange () {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("change", function(){
            carttotal();
        })
    }
} 
// click close
const cartbtn = document.querySelector(".cart-close");
const cartshow = document.querySelector(".cart-show");
cartshow.addEventListener("click", function(){
    document.querySelector('.cart').style.right = "0";
    var overlay = document.querySelector('.overlay');
    overlay.style.display= 'block';
    

});
cartbtn.addEventListener("click", function(){
    document.querySelector('.cart').style.right = "-100%"; 
    var overlay = document.querySelector('.overlay');
    overlay.style.display= 'none';
});


// thêm sự kiện cập nhập thay đổi ảnh và thông tin
// Lấy tất cả các thẻ <a> có class 'update-product'
const updateProduct = document.querySelectorAll(".update-product");

// Lặp qua từng thẻ <a> và thêm sự kiện 'click'
updateProduct.forEach(function(a) {
    a.addEventListener("click", function(event) {
        // Ngăn chặn hành vi mặc định của thẻ <a>
        event.preventDefault();

        // Lấy thông tin từ thẻ cha
        var btnItem = event.target;
        var product = btnItem.parentElement.parentElement;

        // Lấy thông tin sản phẩm
        var productImg = product.querySelector("img").src;
        
        var productName = product.querySelector("H1").innerText;
        var productPrice = product.querySelector("span").innerText;
        var aboutProduct = product.querySelector(".service-pro").innerText;
        // var productInfo = product.querySelector('.product-info').innerText;
           // Sử dụng querySelectorAll để lấy tất cả các phần tử info
           var infoList = product.querySelectorAll('.info');

           // Lặp qua NodeList và nối innerText của từng phần tử
           var infoText = '';
           infoList.forEach(function(info) {
               infoText += info.innerText + '\n';  // Thêm ngắt dòng để phân cách
           });
        var formProduct = product.querySelector(".form-buy");
        // Lưu thông tin sản phẩm vào Local Storage
        localStorage.setItem('productImg', productImg);
        localStorage.setItem('productName', productName);
        localStorage.setItem('productPrice', productPrice);
        localStorage.setItem('aboutProduct', aboutProduct);
        // localStorage.setItem('productInfo', productInfo);
        localStorage.setItem('info', infoText);
        // localStorage.setItem('formProduct',formProduct);

        // Chuyển hướng sang trang sản phẩm
        window.location.href = "product.html";
    });
});


// lọc sắp xếp các phần tử
// Lấy phần tử select và danh sách sản phẩm
const sortOrderSelect = document.querySelector(".sortOrder");
const productItemsContainer = document.querySelector(".product-items");

// lấy phần tử
const productItems = document.querySelectorAll(".product-item");
//chuyển đổi giá tiền 
function parsePrice (priceString){
    return parseInt(priceString.replace(/\D/g, ''),10);
}

// hàm xử lý sắp xếp
function sortProducts(order) {
    const sortedProducts = Array.from(productItems).sort((a,b) => {
        // lấy từng sản phẩm
        const priceA = parsePrice(a.querySelector('.product-item-text span').textContent);
        const priceB = parsePrice(b.querySelector('.product-item-text span').textContent);
        //
        return order === 'asc' ? priceA - priceB : priceB - priceA;
    });
    // Xóa nội dung hiện tại
    productItemsContainer.innerHTML = " ";
    // thêm lại sản phẩm
    sortedProducts.forEach(product  =>{
        productItemsContainer.appendChild(product);
    });
}
sortOrderSelect.addEventListener("change" , function() {
    const sortOrder = sortOrderSelect.value;
    sortProducts(sortOrder);
});


// thêm sự kiện click
const navBar = document.querySelector(".nav-bar");
const navClose = document.querySelector(".cart-close")
navBar.addEventListener("click", function(){
    document.querySelector('.tap-list').style.left = "0";
    document.querySelector(".tap-list").style.width = "100%";
    // var overlay = document.querySelector('.overlay');
    // overlay.style.display= 'block';
    

});
navClose.addEventListener("click", function(){
    document.querySelector('.tap-list').style.left = "-100%"; 
    var overlay = document.querySelector('.overlay');
    overlay.style.display= 'none';
});