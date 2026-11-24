const audio=document.getElementById('radioAudio');
const playBtn=document.getElementById('playBtn');
const statusText=document.getElementById('playerStatus');
const note=document.getElementById('playerNote');
playBtn.addEventListener('click',async()=>{
  if(audio.paused){
    statusText.textContent='Conectando à transmissão...';
    try{await audio.play();playBtn.textContent='Ⅱ';playBtn.setAttribute('aria-label','Pausar transmissão');statusText.textContent='Você está ouvindo ao vivo';note.textContent='Aproveite a programação da Pindaí FM!'}
    catch(e){statusText.textContent='Não foi possível iniciar';note.textContent='Verifique sua conexão e tente novamente.'}
  }else{audio.pause();playBtn.textContent='▶';playBtn.setAttribute('aria-label','Ouvir ao vivo');statusText.textContent='Transmissão pausada';note.textContent='Toque em reproduzir para voltar a ouvir.'}
});
audio.addEventListener('waiting',()=>{statusText.textContent='Carregando transmissão...'});
audio.addEventListener('playing',()=>{statusText.textContent='Você está ouvindo ao vivo'});
audio.addEventListener('error',()=>{statusText.textContent='Falha na transmissão';note.textContent='O streaming pode estar temporariamente indisponível.'});
document.getElementById('year').textContent=new Date().getFullYear();
let installPrompt;
const installBtn=document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;installBtn.hidden=false});
installBtn.addEventListener('click',async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;installBtn.hidden=true});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(console.error))}
