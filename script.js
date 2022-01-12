const login = document.getElementById('botao-login');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('input-senha');
const concordancia = document.getElementById('agreement');
const botaoEnviar = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const contagem = document.getElementById('counter');
const contador = 500;

function verificacao() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

login.addEventListener('click', verificacao);

function habilitaBotao() {
  if (concordancia.checked === true) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}

concordancia.addEventListener('click', habilitaBotao);

function contadorDeCaracteres() {
  const subtrator = textArea.value.length;
  contagem.innerText = `Caracteres restantes: ${contador - subtrator}`;
}

textArea.addEventListener('keyup', contadorDeCaracteres);
