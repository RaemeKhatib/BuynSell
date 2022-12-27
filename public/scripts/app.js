// // Client facing scripts here





$(document).ready(function() {


const createProduct = function(data){

const $results = $(`<article class="Products" id="Products">
<header>


<div class="Product_image"><img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGHaecyUN3NcM7j2NKfIQiGaDXLxbuXkeMWvP8P3nQ5HadK2HL">

</div>

</header>
<section class="Product_info">
<div class="Product_name"><b>${data.name}</b></div>
<div class="description">${data.description}</div>
<div class="status">Status: <b>Available</b></div>
<div class="cart_link">
<a href="orders"><i class="fa-solid fa-heart"></i></a>
<div class="add_Cart">
<button type="submit" class="cart-button">Add To Cart</button>
</div>
</section>
<footer>
</div>
</footer>
</header>
</article>`);

return $results;


};


const renderProducts =(data) => {
$(".product-container").empty();
//loop throuh the array
for(const index of data){
  const $products = createProduct(index)
  $(".product-container").prepend($products);
}
};

const loadProducts = () => {
  $.ajax('/products', { method: 'GET' })
    .then((product) => {
      renderProducts(product);
    });
};
loadProducts();











});
