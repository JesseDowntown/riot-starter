$('#button').on('click', function(e) {
  var item = $('#name').val();
  var cost = $('#price').val();
  var newItemHtml = $.render(newItem, { name: item, price: cost});
  $('#store').append(newItemHtml);
  e.preventDefault();
})

var newItem = $('#templates .item').html()
