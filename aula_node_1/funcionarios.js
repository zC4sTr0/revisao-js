const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

axios.get(url).then((response) => {
  //   const funcionarios = response.data;
  var menor = undefined;
  var posicao = 0;
  response.data.forEach((element, index) => {
    if (!menor || element.salario < menor) {
      menor = element.salario;
      posicao = index;
    }
  });
  console.log(response.data[posicao]);
});
