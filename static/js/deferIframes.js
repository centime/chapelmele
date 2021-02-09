function deferIframe() {
  var iframeElem = document.getElementsByTagName('iframe');
  for ( var i = 0; i < iframeElem.length; i++ ) {
    if(iframeElem[i].getAttribute('data-src')) {
      iframeElem[i].setAttribute('src',iframeElem[i].getAttribute('data-src'));
    } 
  } 
}
window.onload = deferIframe;