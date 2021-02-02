async function fetchPosts(){
  template = $('#post-template').html();
  $posts = await $.get('https://chapelmele.github.io/website/actualites.json');

  for (var i=0; i<$posts.length; i++){
    var $bloc = $(template);
    $bloc.find('h2').html('<strong>'+$posts[i].title+'</strong><br/>'+ $posts[i].date);
    $bloc.find('.bloc-text p').html($posts[i].content);
    if ($posts[i].picture) {
      $bloc.find('.bloc-pic img').attr('src', 'https://chapelmele.github.io/website/actu-imgs/'+$posts[i].picture);
    }
    $('#feed').append($bloc);
    (i%2 == 0) ? $bloc.toggleClass('bloc-img-right bloc-img-left') : 0;
  }
}

$(document).ready(fetchPosts);