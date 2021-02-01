var dataRepo = 'https://chapelmele.github.io/website/';
var ex = '[{"title": "Deuxieme actu","content":"Duis aute irure dolor in .","picture":"porte.JPG","date":"2021-02-02"},{"title": "Première actu","content":"Odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.","picture":"vitrail.jpg","date":"2021-02-01"}]';
  

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

async function actuExport() {
  posts = await $.get('https://chapelmele.github.io/website/actualites.json');
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
  $a.find('.export').on('click', actuExport);
  $a.find('.convert-csv-json').on('click', actuConvertCsvJson);
  $a.find('.convert-json-csv').on('click', actuConvertJsonCsv);
  $a.find('.example-csv').on('click', actuExampleCsv);
  $a.find('.example-json').on('click', actuExampleJson);
}


$(document).ready(init);