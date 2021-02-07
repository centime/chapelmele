async function fetchPosts(){
  const template = $('#post-template').html();
  const response = await fetch("//data.chapelmele.com/actualites.json");
  const posts = await response.json();
  
  for (var i=0; i<posts.length; i++){
    var $bloc = $(template);
    $bloc.find('h2').html('<strong>'+posts[i].title+'</strong><br/>'+ posts[i].date);
    $bloc.find('.bloc-text p').html(posts[i].content);
    if (posts[i].picture) {
      $bloc.find('.bloc-pic img').attr('src', '//data.chapelmele.com/actu-imgs/'+posts[i].picture);
    }
    $('#feed').append($bloc);
    (i%2 == 0) ? $bloc.toggleClass('bloc-img-right bloc-img-left') : 0;
  }
}

$(document).ready(fetchPosts);

