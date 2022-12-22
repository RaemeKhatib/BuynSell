// // Client facing scripts here
// $(document).ready(function() {


// const createProduct = function(data){

// const $products = $(`<article class="Products">
// <header>


// <div class="Product_image"><${data.products.image_url}>

// </div>

// </header>
// <section class="Product_info">
// <div class="Product_name"><b>${data.products.name}</b></div>
// <div class="description">${data.products.description}</div>
// <div class="status">Status: <b>Available</b></div>
// <div class="cart_link">
// <a href="default.asp"><i class="fa-solid fa-heart"></i></a>
// <div class="add_Cart">
// <button type="submit" class="cart-button">Add To Cart</button>
// </div>
// </section>
// <footer>
// </div>
// </footer>
// </header>
// </article>`);

// return $products;


// };

// const renderProducts =(data) => {
// $(".product-container").empty();
// //loop throuh the array
// for(const index of data){
//   const $products = createProduct(index)
//   $(".product-container").prepend($products);
// }
// };

// const loadProducts = () => {
//   $.ajax('/products', { method: 'GET' })
//     .then((product) => {
//       renderProducts(product);
//     });
// };
// loadProducts();











// });
