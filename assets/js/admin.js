

// <p><a href="https://github.com/chapelmele/website/commits/master" target="_blank">Liste des modifications</a></p>  

function init(){
  $('#connexion').on('click', connexion);
  $('#deconnexion').on('click', deconnexion);
  (localStorage['ghCMSEditor-' + document.domain] == 'enabled')? displayEditorSection():0;
}

function connexion(){
  const user = $('#user').val();
  const token = $('#password').val();
  if (user && token){
    saveGhCMSCreedentials(user, token);
    activateEditorMode();
  }
}

function deconnexion(){
  localStorage['ghCMSCredentials-' + document.domain] = '';
  localStorage['ghCMSEditor-' + document.domain] = "disabled";
  location = location;
}

function saveGhCMSCreedentials(u, t){
  localStorage['ghCMSCredentials-' + document.domain] = JSON.stringify({
    'token': t,
    'user': u
  });
}
function activateEditorMode(){
  localStorage['ghCMSEditor-' + document.domain] = "enabled";
  location = location;
}

$(document).ready(init);


function displayEditorSection(){
  const template = `
<section class="content">
  <div class="wrapper">
    <div class="bloc-text">
      <h2><strong>Edition</strong></h2>
      <button id="editor-mode-activate">Activer le mode Edition</button>
      <p><a href="https://github.com/chapelmele/website/commits/master" target="_blank">Liste des modifications</a></p>
    </div>
  </div>
</section>`
  $('#hero').after($(template));
  $('#editor-mode-activate').on('click', activateEditorMode);
}
