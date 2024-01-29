const anterior = document.getElementById('anterior');
const playPause = document.getElementById('play-pause');
const proximo = document.getElementById('proximo');
var audioLivro = document.getElementById('livro-capitulo');
var numeroCap = document.getElementById('numero-capitulo');
let tocando = false;
let capitulo = 1;
window.addEventListener('load', ()=>{
    numeroCap.textContent = `${capitulo}`;
});
function tocarFaixa(){
    playPause.textContent = "⏸";
    audioLivro.play()
    tocando = true;
}
function pausarFaixa(){
    playPause.textContent = "▶";
    audioLivro.pause()
    tocando = false;
}
function situacaoAudio(){
    if(tocando === true){
        pausarFaixa();
    }
    else tocarFaixa();
}
playPause.addEventListener("click", situacaoAudio);

function proximoCap(){
    capitulo+=1;
    if(capitulo>3){
        alert("O livro acabou!");
    }
    else{
        numeroCap.textContent = `${capitulo}`;
        audioLivro.src=`livros/dom-casmurro/${capitulo}.mp3`;
        tocarFaixa();    
    }
}
function voltarCap(){
    capitulo-=1;
    if(capitulo <= 0){
        alert("Não é possível retornar");
    }
    else{
        numeroCap.textContent = `${capitulo}`;
        audioLivro.src=`livros/dom-casmurro/${capitulo}.mp3`;
        tocarFaixa();
    }
}
proximo.addEventListener("click", proximoCap);
anterior.addEventListener("click", voltarCap);
