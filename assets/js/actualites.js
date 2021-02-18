(()=>{

var env, remote;
if (document.domain === "localhost"){
  env = 'dev';
  remote = '/assets/dev';
} else {
  env = 'prod';
  remote = "//data.chapelmele.com";
}
  // env = 'prod';
  // remote = "//data.chapelmele.com";

async function fetchPosts(){
  const template = $('#post-template').html();
  const response = await fetch(remote + '/news.json');
  const posts = await response.json();
  
  function ghcmsDecode(str){
   return decodeURI(atob(str))
  }
  for (let i=0; i<posts.length; i++){
    let $bloc = $(template);
    $bloc.prop('id', posts[i].id);
    $bloc.attr('ghcms-feed-index', i);
    $bloc.find('h2').html(ghcmsDecode(posts[i].title));
    $bloc.find('h3').html(posts[i].date);
    $bloc.find('.bloc-text div.description').html(ghcmsDecode(posts[i].b64content));
    if (posts[i].picture) {
      $bloc.find('.bloc-pic img').attr('src', remote + '/news-imgs/'+posts[i].picture);
    }
    $('#feed').append($bloc);
    (i%2 == 0) ? $bloc.toggleClass('bloc-img-right bloc-img-left') : 0;
  }

  initFadeIn();
  location.hash=location.hash;
}


((localStorage['ghCMSEditor-' + document.domain])==="enabled") ? 0 :$(document).ready(fetchPosts);

})();