const userName = document.querySelector('#container > div > div.treeWrap > div.user > div.only_pc.user_inner.clearfix > div.inner_top > div.left > div > div > div').innerHTML;
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}
const userHash = await sha256(userName);
if (userHash != '557e23c37e80e113ad388f63fd8535037c9f73dbb8f3fcf9ee66012d80f24087') {
  alert('공사중');
  history.go(-1);
}

const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get('level')??0;
const gameArea = document.getElementById('rText');
gameArea.innerHTML = `<div style="text-align:center;font-size:50px;line-height:75px;">Level <strong>${level}</strong></div>`;

switch (level) {
  case 0:
    gameArea.innerHTML += '<div style="text-align:center;"><button id="gameSubmit">✓</button></div>';
}

document.getElementById('gameSubmit').addEventListener('click', function () {
  const url = new URL(window.location.href);
  url.searchParams.set('level', level+1);
  window.location.href = url.href;
});

//<img id="init" src="https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png" style="width:0px;height:0px;" onload  ="document.getElementById('init').remove(); const gameScript = document.createElement('script'); gameScript.src = 'https://grassdoll3712.github.io/riroGame/game.js'; const gameCSS = document.createElement('link'); gameCSS.rel = 'stylesheet'; gameCSS.href = 'https://grassdoll3712.github.io/riroGame/game.css'; document.head.appendChild(gameScript); document.head.appendChild(gameCSS);">