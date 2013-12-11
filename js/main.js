var itemTemplate = $('#templates .item').html();

var newItemHtml = $.render(itemTemplate, { name: 'Dewberry', price: 0.15 });
$('#store').append(newItemHtml);

var items = [
  { name: 'lemon', price: 3},
  { name: 'orange', price: 6},
  { name: 'artichoke', price: 9},
]


for (var i = 0; i < items.length; i++ ) {
    var moreItem = $.render(itemTemplate, items[i]);
    $('#store').append(moreItem);
  };



