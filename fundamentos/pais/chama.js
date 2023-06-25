fetch('https://restcountries.com/v3.1/name/Brazil')
  .then(response => response.json())
  .then(data => {
    // Aqui você pode trabalhar com os dados recebidos da API
    console.log(data);
  })
  .catch(error => {
    // Trate possíveis erros durante a requisição
    console.error(error);
  });
