// ghCMS v0.2
// github.com/centime/ghcms


try {
  JSON.parse(localStorage['ghCMSCredentials-' + document.domain]);
} catch {
  alert("Undefined editor credentials");
  localStorage['ghCMSEditor-' + document.domain] = "disabled";
}
const ghCMSCredentials = JSON.parse(localStorage['ghCMSCredentials-' + document.domain]);
const pageLocation = document.location.pathname + document.location.search;
var env, remote;
var edits, editsSha;


env = 'prod';
remote = "//" + ghCMSCredentials.remote;
// env = 'dev';
// remote = '/static/js/';


import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
const octokit = new Octokit({ auth: ghCMSCredentials.token });

// todo: restrict hns to h3s
var mdConverter = new showdown.Converter();

$(document).ready(()=>{
  checkCredentials()
  .then(displayPanel)
  .then(enableEditOptions)
  .then(fetchEdits);
});

async function checkCredentials(){
  // https://docs.github.com/en/rest/reference/repos#contents
  const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: ghCMSCredentials.owner,
    repo: ghCMSCredentials.repo,
    path: 'edits.json'
  }).catch(error => {
    alert("Invalid editor credentials: " + error);
    localStorage['ghCMSEditor-' + document.domain] = "disabled";
  })
  console.log('Valid ghCMS credentials');
  editsSha = response.data.sha;
}

function displayPanel(){
  const $panel = $(`
<div id="ghCMS-editor-panel" class="mini">
  <h2>Mode Edition <button class="close">X</button><button class="minimize">+-</button></h2>
  Les mises à jour mettent quelques dizaines de secondes à apparaître.
  <input></input>
  <textarea></textarea>
  <button class="cancel">Annuler</button>
  <button class="validate">Valider</button>
</div>
  `);
  $('body').append($panel);
  initPanel();
}

function initPanel(){
  let $panel = $('#ghCMS-editor-panel');
  $panel.find('.close').on('click', disableEditorMode);
  $panel.find('.minimize').on('click', ()=>($panel.toggleClass('mini maxi')));
  $panel.find('textarea').on('keyup', visualizeEdit);
  $panel.find('.cancel').on('click', cancelEdit);
  $panel.find('.validate').on('click', validateEdit);
}

function disableEditorMode(){
  $('#ghCMS-editor-panel').css('display', 'none');
  $('.ghcms-edit-option').css('display', 'none');
  localStorage['ghCMSEditor-' + document.domain] = "disabled";
}

function enableEditOptions(){
  let $editables = $('.ghcms');
  const editOptionsTemplate = `
<button class="ghcms-edit-option">Edit</button>
  `
  $editables.map((_, e) => {
    let $e = $(e);
    let $b = $(editOptionsTemplate);
    let id = getGhCmsId($e);
    $b.attr('ghcms-data', id);
    $b.on('click', (()=>loadToPanel(id)));
    $e.after($b);
  });
}

function getGhCmsId($e){
  // todo: some more robust checks would be good
  return $e.attr('class').split(/\s/).filter((c)=>c.startsWith('ghcms-'));
}

function loadToPanel(ghCmsId){
  // todo: check if there are several identic ghCmsId on this page. That would break stuff
  $('#ghCMS-editor-panel input').val(ghCmsId);
  $('#ghCMS-editor-panel textarea').val(mdConverter.makeMarkdown($('.'+ghCmsId).html()));
  $('#ghCMS-editor-panel').removeClass('mini').addClass('maxi');
}

function visualizeEdit(){
  $('.'+$('#ghCMS-editor-panel input').val()).html(
    mdConverter.makeHtml($('#ghCMS-editor-panel textarea').val())
  );

}

function cancelEdit(){
  location = location;
}

function validateEdit(){
  let resp = confirm('Are you sure ?');
  if (!resp) { return }

  const targetEl = $('#ghCMS-editor-panel input').val();
  const newContent = mdConverter.makeHtml($('#ghCMS-editor-panel textarea').val());

  edits[pageLocation] = edits[pageLocation] || {};
  // todo: tofix: I shouldn't have to do this to get around accentuated chars...
  edits[pageLocation][targetEl] = btoa(newContent);

  if (env == 'dev') { 
    prompt('New json:', JSON.stringify(edits));
  }
  if (env == 'prod') { 
    let commitMsg = '[ghcms-edit] ' + pageLocation + '#' + targetEl;
    uploadEdits(commitMsg, edits);
  }

}

async function uploadEdits(msg, obj){
  const response = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
    owner: ghCMSCredentials.owner,
    repo: ghCMSCredentials.repo,
    path: 'edits.json',
    sha: editsSha,
    message: msg,
    content: btoa(JSON.stringify(obj))
  });
}

async function fetchEdits(){
  const response = await fetch(remote + '/edits.json');
  edits = await response.json();
}