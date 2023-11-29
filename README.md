### ♦️ Estrutura

Todo a estrutura em HTML foi feita utlizando tags semânticas onde, basicamente, através de divs foi construída a estrutura do relógio (Conteiner, números, textos etc.)	Posteriormente essas divs foram estilizadas utlizando elementos do CSS como flexbox, Grid entre outros.

### ♦️ Lógica

A Lógica por trás do relógio foi elaborada utilizando propriedades do Javascript, como: const, funções, variáveis além de recusros nativos do Javascript para tratamento com horas. Dentro do algoritmo a função que é responsável pela atualização do tempo é a função time. Dentro dela comandos como datetoday.gethours estão presentes. Os valores obtidos são repassados ao código do HTML através do comando document.GetElementById e atualizados com base no Id previamente criado.

## ☁️ Integração com API de clima

A API utilizada foi do site [OpenWeatherMap](https://openweathermap.org/api). Utilizando a documentação como base o código Javascript foi criado. Foram criadas três funções.A primeira é cliqueNobotao, que irá sinalizar ao programa que o usuário clicou no botão. A cidade escrita vai ser armazenada e passada para a próxima função. A segunda, é a função buscarcidade que recebe como valor, o texto descrito pelo usuário no campo designado. Após isso, a função ira buscar o nome da cidade nos dados da API. A última, dadosnatela, irá apenas fazer a substuição do texto escrito no código HTML pelos valores obtido pela função buscarcidade.

### ♦️ Documentação da API

[API Current weather data](https://openweathermap.org/current)
