// https://github.com/octokit/core.js#readme
// https://docs.github.com/en/rest/reference/repos#contents

import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
const octokit = new Octokit({ auth: localStorage.adminToken });

async function displayActuImgs(){
  const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: 'chapelmele',
    repo: 'website',
    path: 'actu-imgs'
  });
  // console.log(response);
  const imgsList = response.data.map((img)=>(img.name));
  $('#imgs-list').val(imgsList);
}

if ($('#imgs-list').length){
  displayActuImgs();
}

async function getActualites(){
  const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: 'chapelmele',
    repo: 'website',
    path: 'actualites.json'
  });
  console.log(response.data.sha);
  return response.data
  // const imgsList = response.data.map((img)=>(img.name));
  // $('#imgs-list').val(imgsList);
}

async function test(){
  const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: 'chapelmele',
    repo: 'website',
    path: ''
  });
  console.log(response);
}

test();


// btoa(JSON.stringify({test:"success"}))
// "eyJ0ZXN0Ijoic3VjY2VzcyJ9"
async function test2(){
  const response = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
    owner: 'chapelmele',
    repo: 'website',
    path: 'test.json',
    message: '[test] creating new json file',
    content: btoa(JSON.stringify({test:"success"}))
  })
  console.log(response);
}

// test2()

async function createJSON(filename, obj){
  const content = btoa(JSON.stringify(obj));
}