$(document).ready(function() {
  

const $createMessage = $(`
<form class="message_form">
      <label>Contact Seller</label>
      <br />
      <input id="message" name="message" placeholder="Your Message"/>
      <br />
      <input id="email" name="email" placeholder="Your Email" />
      <br />
      <button id="send" type="button">Send Message</button>
    </form>
`)

window.$createMessage = $createMessage;
$createMessage.on('submit', function(event) {

});




  // const renderMessage = (data) => {
  //   $(".cart_link").empty();

  //     $(".message").append($message);

  // };

  // const renderProducts = (data) => {
  //   $(".product-container").empty();
  //   //loop throuh the array
  //   for (const index of data) {
  //     const $products = createProduct(index);
  //     $(".product-container").append($products);
  //   }
  });
