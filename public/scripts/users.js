// Client facing scripts here
$(() => {
  // $('#fetch-users').on('click', () => {
  //   $.ajax({
  //     method: 'GET',
  //     url: '/api/users'
  //   })
  //     .done((response) => {
  //       const $usersList = $('#users');
  //       $usersList.empty();

  //       for (const user of response.users) {
  //         $(`<li class="user">`).text(user.name).appendTo($usersList);
  //       }
  //     });
  // });




  $('#new-product').on('submit', (e) => {
    e.preventDefault();
    const status = e.target.status.value;
    const productName = e.target.productName.value;
    const description = e.target.description.value;
    const image_url = e.target.picture.value;
    const price = e.target.cost.value;

    $.ajax({
      method: 'POST',
      url: '/products',
      data: { product: { productName, description, image_url, price, status } },
    }).then((res) => {
      console.log(res);
      $('.success-text').text(res)
    });

  });


  $('#cancel').on('click', function() {
    // reload the page
    window.location.reload();

  });


});


