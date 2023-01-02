// // Client facing scripts here





$(document).ready(function() {


  const createProduct = function(data) {

    const $results = $(`<article class="Products" id="Products-id-${data.id}">
<header>
 <div class="Product_image"><img src =${data.image_url}>
 </div>
</header>
 <section class="Product_info">
  <div class="Product_name"><b>${data.name}</b></div>
  <div class="description">${data.description}</div>
  <div class="Price_status">
  <div class="status">Status: <b>Available</b></div>
  <div class="Price"><b>Price:</b><b class="price_amount">CAD${data.price}</b></div>
  </div>
  <div class="cart_link">
  <i onclick="increase(${data.id})" class="fa-solid fa-heart"></i>
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


  const renderProducts = (data) => {
    $(".product-container").empty();
    //loop throuh the array
    for (const index of data) {
      const $products = createProduct(index);
      $(".product-container").append($products);
    }
  };

  const loadProducts = () => {
    $.ajax('/products', { method: 'GET' })
      .then((product) => {
        renderProducts(product);
      });

  };
  loadProducts();



let increase = (id) => {
return id
  console.log(id)
};






});
