// // Client facing scripts here





$(document).ready(function() {


  const createProduct = function(data, isAdmin, isFav = false) {
    const $results = $(`<article class="Products" id="Products-id-${data.id}">
<header>
 <div class="Product_image"><img class="pImage" src =${data.image_url}>
 </div>
</header>
 <section class="Product_info">
  <div class="Product_name"><b>${data.name}</b></div>
  <div class="description">${data.description}</div>
  <div class="Price_status">
  <div class=${data.status === "Sold" ? "sold" : "available"}>Status: <b>${data.status}</b></div>
  <div class="Price"><b>Price:</b><b class="price_amount">CAD${data.price}</b></div>
  </div>
  <div class="cart_link">

  <a href="message/${data.id}"><button class="message">Message Seller</button></a>

  <div class="three_buttons">
  ${!isFav ?
        `<button class="cart-button ${data.id}" id="favorites">Add To Favorites</button>` : ""
      }
      <div class="two_buttons">
  ${isAdmin ?
        (data.status === "Sold" ?
          ` <form method= "POST" action= "/products/${data.id}">
   <input name="status" type="hidden" value="Available">
    <button class="sold-button ${data.id}">Mark As Available</button>
    </form>`: ` <form method= "POST" action= "/products/${data.id}">
    <input name="status" type="hidden" value="Sold">
     <button class="sold-button ${data.id}">Mark As Sold</button>
     </form>` ) : ""

      }
     ${isAdmin ?
        `<form method= "POST" action= "/products/${data.id}/delete/">
  <button class="delete-button ${data.id}" id="delete">Delete</button>
  </form>`: ""
      }
      </div>
  </div>
 </section>
 <footer>
 </div>
 </footer>
</header>
</article>`);

    return $results;


  };


  const renderProducts = (data, isAdmin) => {
    $(".product-container").empty();
    //loop throuh the array
    for (const index of data) {
      const $products = createProduct(index, isAdmin);
      $(".product-container").append($products);
    }
  };

  const loadProducts = () => {
    $.ajax('/users-api', { method: 'GET' }).then((result) => {
      return result.user;

    }).then((user) => {
      return $.ajax('/products', { method: 'GET' })
        .then((product) => {
          renderProducts(product, user.admin);

        });
    });

  };
  loadProducts();


  const filterProducts = (products, minimum, maximum) => {
    return products.filter(product => product.price >= minimum && product.price <= maximum);

  };


  $('#search').on('click', () => {
    let min = $('#Minimum_Price').val();
    let max = $('#Maximum_Price').val();


    $.ajax({
      method: 'GET',
      url: '/products',
      success: function(response) {
        console.log(response);
        //filters by users selected price range
        let filteredProducts = filterProducts(response, min, max);
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

    return products;
  };


  $(".product-container").on('click', '.cart-button', function(e) {

    const className = e.target.className.split(' ')[1];
    $.ajax({
      method: 'POST',
      url: '/favorites',
      data: { favorite: { user: 1, product: className } },
      success: function(response) {

        let favoritedProducts = favoriteProducts(response);
        $('.favourite_counter').contents()[0].nodeValue = favoritedProducts.length;


      },
      error: function(err) {
        console.log(err);
      }

    });

  });


  const renderFavorites = (data) => {
    $(".product-container").empty();
    //loop throuh the array
    for (const index of data) {
      const $products = createProduct(index, false, true);
      $(".product-container").append($products);
    }
  };

  $('.favourite_counter').on('click', function() {
    $.get('/favorites', function(data) {
      const favProducts = favoriteProducts(data);
      renderFavorites(favProducts);
    }

    );
  });



  $.get('/favorites', function(data) {
    $('.favourite_counter').contents()[0].nodeValue = data.length;

  });


});
