// Arquivo JavaScript do Iniciando em Vue.js

// Implementando two-way data binding com js puro

function entrandoComDados(value) {
  document.getElementById("saida").innerHTML = "O texto que escreveste é esse? <span class='txt-input'> " + value + "</span>";
}

// Instanciando o meu objeto Vue

var vm = new Vue({
  el: '#app',
  data: {
    input: ''
  }
});
