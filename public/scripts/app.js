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
  <button class="message">Message Seller</button>
  <div class="add_Cart">
  <button class="cart-button ${data.id}" id="favorites">Add To Favorites</button>
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
        // console.log($('#favorites'))

      });

  };
  loadProducts();


  const filterProducts = (products, minimum, maximum) => {
    return products.filter(product => product.price >= minimum && product.price <= maximum);

  };


  $('#search').on('click', () => {
    let min = $('#Minimum_Price').val();
    let max = $('#Maximum_Price').val();
    console.log(min, max);

    $.ajax({
      method: 'GET',
      url: '/products',
      success: function(response) {
        console.log(response);
        //filters by users selected price range
        let filteredProducts = filterProducts(response, min, max);
        console.log(filteredProducts);
        renderProducts(filteredProducts);

      },
      error: function(err) {
        console.log(err);
      }

    });


  });

  $('#search-form__cancel').on('click', function() {
    // reload the page
    window.location.reload();

  });



  const favoriteProducts = (products) => {
    // return products.filter(product => product.id === 1);
return products;
  };

  // let basket = {};
  $(".product-container").on('click', '.cart-button', function(e) {
    console.log(e.target.className)
    const className = e.target.className.split(' ')[1]
    $.ajax({
      method: 'POST',
      url: '/favorites',
      data:{favorite: {user: 1, product: className}},
      success: function(response) {
        console.log(response);
        let favoritedProducts = favoriteProducts(response);
$('.favourite_counter').contents()[0].nodeValue = favoritedProducts.length
        // renderProducts(favoritedProducts);

      },
      error: function(err) {
        console.log(err);
      }

    });

  });

  $('.favourite_counter').on('click', function(){
    $.get('/favorites', function(data){
      const favProducts = favoriteProducts(data)
      renderProducts(favProducts);
    }

  )
  })


});
