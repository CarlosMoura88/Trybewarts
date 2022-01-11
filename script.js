const login = document.getElementById('botao-login');
const inputEmail = document.getElementById('input-email');
const inputSenha = document.getElementById('input-senha');

function verificacao() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

login.addEventListener('click', verificacao);
