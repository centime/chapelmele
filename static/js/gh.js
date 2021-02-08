// https://github.com/octokit/core.js#readme
// https://docs.github.com/en/rest/reference/repos#contents

import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
const octokit = new Octokit({ auth: localStorage.adminToken });

async function getActuImgs(){
  const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: 'chapelmele',
    repo: 'website',
    path: 'actu-imgs'
  });
  console.log(response);
  const imgsList = response.data.map((img)=>(img.name));
  $('#imgs-list').val(imgsList);
}

if ($('#imgs-list').length){
  getActuImgs();
}





// await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
//   owner: 'octocat',
//   repo: 'hello-world',
//   path: 'path',
//   message: 'message',
//   content: 'content'
// })