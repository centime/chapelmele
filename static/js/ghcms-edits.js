async function fetchEdits(){
  const pageLocation = document.location.pathname + document.location.search;
  const response = await fetch("//data.chapelmele.com/edits.json");
  // const response = await fetch("/static/js/edits.json");
  edits = await response.json();

  if (edits[pageLocation]) {
    for (let e in edits[pageLocation]){
      let $target = $('.' + e);
      let newContent = atob(edits[pageLocation][e]);
      $target.html(newContent);
    }
  }

}

$(document).ready(fetchEdits);

