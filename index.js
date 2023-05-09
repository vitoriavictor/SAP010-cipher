import cipher from './cipher.js';
console.log(cipher);
//aqui você deve escutar os eventos de DOM, chamar cipher.encode() e cipher.decode()

function cifrarMensagem() {
  const textoInicial = document.getElementById('textoInicial').value.trim();
  const deslocamento = parseInt(document.getElementById('deslocamento').value);
  const textoFinal = cipher.encode(deslocamento, textoInicial);
  document.getElementById('textoFinal').innerText = textoFinal;
}
const btnCifrar = document.getElementById('btn-cifrar');
btnCifrar.addEventListener('click', cifrarMensagem);

function decifrarMensagem() {
  const textoFinal = document.getElementById('textoFinal').value.trim();
  const deslocamento = parseInt(document.getElementById('deslocamento').value);
  const textoInicial = cipher.decode(deslocamento, textoFinal);
  document.getElementById('textoFinal').innerText = textoInicial;
}
const btnDecifrar = document.getElementById('btn-decifrar');
btnDecifrar.addEventListener('click', decifrarMensagem);

function limparMensagem() {
  document.getElementById('textoInicial').value = '';
  document.getElementById('deslocamento').value = 3;
  document.getElementById('textoFinal').value = '';
}
const btnLimpar = document.getElementById('limpar');
btnLimpar.addEventListener('click', limparMensagem);