
var videos = [
  { title: 'Get Krazy', youtubeId: 'GyR2HJ9B7aM', genre: 'kid rap' },
  { title: 'Sadness', youtubeId: 'sIeJSSjTG3k', genre: 'movie clip' }
];
// Pull html from index and return it as a string
var itemTemplate = $('#templates .video-list-item').html()
// Interpolate data and render to html page using riot.js
var renderVideoList = function () {
  for (var i = 0; i < videos.length; i++) {
    var newItemHtml = $.render(itemTemplate, videos[i]);
    $('#video-list').append(newItemHtml)
  }
};
// Initial rendering
renderVideoList();
// Render additional videos posted through form
$('#submit').on('click', function(e) {
  var title = $('#createTitle').val();
  var youtubeId = $('#createYoutubeId').val();
  videos.push({});
  videos[(videos.length)-1].title = title;
  videos[(videos.length)-1].youtubeId = youtubeId;
  var newItemHtml = $.render(itemTemplate, videos[videos.length-1]);
  $('#video-list').append(newItemHtml);
  e.preventDefault();
});
// Calculate genre stats
var calculateGenreStats = function () {
  stats = {};
  for (var i = 0; i < videos.length; i++) {
    var genre = videos[i].genre;
    if (stats[genre] === undefined) {
      stats[genre] = 0;
    }
    stats[genre] += 1;
  }
}
calculateGenreStats();
console.log(stats);

