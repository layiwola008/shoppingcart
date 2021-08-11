$(function () {
  $('#js-shopping-list-form').submit(
    function (event) {
      event.preventDefault()
      console.log('Poju')

    const value = $('#shopping-list-entry').val()

  $('ul').append(`
    <li>
      <span class="shopping-item">${value}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
        <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
          </button>
        </div>
      </li>
    `)
});

$('ul').on('click', '.shopping-item-delete', function(event){
const input = $(this).parent().parent().remove();
console.log(input)
});

$('ul').on('click', '.shopping-item-toggle', function(event){
const input = $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
console.log(input)
});


})