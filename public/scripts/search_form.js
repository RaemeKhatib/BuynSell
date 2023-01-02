$(() => {

$('#search').on('click', () => {
  $.ajax('/database', { method: 'GET' })
  .done((response) => {
    const searchList = getAllProducts(response);
return searchList;
  });



});


$('#search-form__cancel').on('click', function() {
  const searchList = $('.searchForm-container')
  searchList.empty();
  // return false;
});










});
// $('#fetch-users').on('click', () => {
//   $.ajax({
//     method: 'GET',
//     url: '/api/users'
//   })
//   .done((response) => {
//     const $usersList = $('#users');
//     $usersList.empty();

//     for(const user of response.users) {
//       $(`<li class="user">`).text(user.name).appendTo($usersList);
//     }
//   });
// });
