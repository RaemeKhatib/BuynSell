$(document).ready(function() {
  // const $signUpForm = $(
  //   <form></form>
  // )
  // window.$signUpForm = $signUpForm;
  // signUpForm.on('submit', function(event) {
  //   event.preventDefault();

  //   const data = $(this).serialize();
  //   signUp(data)
  //     .then(getMyDetails)
  //     .then((json) => {
  //       header.update(json.user);
  //       views_manager.show('listings');
  //     });
  // });

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