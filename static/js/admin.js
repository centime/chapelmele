var dataRepo = '//data.chapelmele.com';
var ex = '[{"title": "Deuxieme actu","content":"Trois ans et demi plus tard, l’association se porte bien et vient d’intégrer la salle située sous la chapelle","picture":"porte.JPG","date":"2021-02-02"},{"title": "Première actu","content":", où des cours de Zumba étaient donnés jusqu’à l’été 2018. « Quand elle s’est libérée, on a saisi l’opportunité » , raconte Mehdi Meskini, président de l’association.","picture":"vitrail.jpg","date":"2021-02-01"}]';
  

// todo: escape the shit out of it so it doesn't break first special char
function json2csv(objArray) {
  var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  var str = Object.keys(array[0]).join(';')+'\r\n';
  for (var i = 0; i < array.length; i++) {
    var line = '';
    for (var index in array[i]) {
      if (line != '') line += ';'
      line += array[i][index];
    }
    str += line + '\r\n';
  }
  return str;
}

function csv2json(csv){
  var lines=csv.split('\n');
  var result = [];
  var headers=lines[0].split(';');
  for(var i=1;i<lines.length;i++){
    if (!lines[i].length) continue
    var obj = {};
    var field=lines[i].split(';');
    for(var j=0;j<headers.length;j++){
      obj[headers[j]] = field[j];
    }
    result.push(obj);
  }
  return JSON.stringify(result)
}



var $out = $('#admin-actu .output');

function preview() {
  // order-sensitive because there's absolutely no checks later
  // todo: fix: object properties order isn't guaranteed
  //
  // todo: fix: useless hotlinking spam towards github
    var newPost = {
      title: $('#new-post-title').val(),
      content: $('#new-post-content').val(),
      picture: $('#new-post-picture').val(),
      date: $('#new-post-date').val()
    };
    var $bloc = $($('#post-template').html());
    $bloc.find('h2').html('<strong>' + newPost.title + '</strong><br/>' + newPost.date);
    $bloc.find('.bloc-text p').html(newPost.content);
    if (newPost.picture){
      $bloc.find('.bloc-pic img').attr('src', dataRepo+'/actu-imgs/' + newPost.picture);
    }
    $('#demo-feed').html($bloc);
    $out.val(JSON.stringify(newPost)); 
}

async function addPost(){
  // order-sensitive because there's absolutely no checks later
  // todo: fix: object properties order isn't guaranteed
  var newPost = {
    title: $('#new-post-title').val(),
    content: $('#new-post-content').val(),
    picture: $('#new-post-picture').val(),
    date: $('#new-post-date').val()
  };
  var posts = await $.get(dataRepo+'/actualites.json');
  posts.unshift(newPost);
  $out.val(JSON.stringify(posts)); 
}

async function actuExport() {
  var posts = await $.get(dataRepo+'/actualites.json');
  $out.val(JSON.stringify(posts)); 
}
function actuConvertJsonCsv() {
  var json = $out.val();
  $out.val(json2csv(json));
}
function actuConvertCsvJson() {
  var csv = $out.val();
  $out.val(csv2json(csv));
}
function actuExampleCsv() {
  $out.val(json2csv(ex));
}
function actuExampleJson() {
  $out.val(ex);
}

function init(){
  var $a = $('#admin-actu');
  $a.find('#new-post input').on('keyup', preview);
  $a.find('.add-post').on('click', addPost);
  $a.find('.export').on('click', actuExport);
  $a.find('.convert-csv-json').on('click', actuConvertCsvJson);
  $a.find('.convert-json-csv').on('click', actuConvertJsonCsv);
  $a.find('.example-csv').on('click', actuExampleCsv);
  $a.find('.example-json').on('click', actuExampleJson);

  $('#admin-token-save').on('click', saveAdminToken);
  $('#admin-mode-activate').on('click', adminModeActivate);
}

function saveAdminToken(){
  localStorage.adminToken = $('#admin-token').val();
}
function adminModeActivate(){
  localStorage.isAdminActive = true;
}

$(document).ready(init);