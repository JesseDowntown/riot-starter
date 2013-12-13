
var videos = [
  { title: 'Get Krazy', youtubeId: 'GyR2HJ9B7aM' },
  { title: 'Sadness', youtubeId: 'sIeJSSjTG3k' }
];

var itemTemplate = $('#templates .video-list-item').html()

var renderVideoList = function () {
  for (var i = 0; i < videos.length; i++) {
    var newItemHtml = $.render(itemTemplate, videos[i]);
    $('#video-list').append(newItemHtml)
  }
};

renderVideoList();

$('#submit').on('click', function(e) {
  $('#title')
  e.preventDefault();
});