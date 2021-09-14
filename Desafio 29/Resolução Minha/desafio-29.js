(function(window, document) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */
  
  let $vehicleControle = 2;

  let $button = document.querySelector('[data-js="btnSubmit"]');
  
  let catalog = {
    veiculo1: {
      URLImage: '',
      brandModel: 'Volkswagem Polo',
      year: 2008,
      licensePlate: 'DXT-0061',
      color: 'Cinza'
    }
  }

  let $table = document.querySelector('[data-js="vehicles-table"]');
  
  function reloadPage() {

    let $tableHead = $table.firstElementChild.cloneNode(true);
    $table.innerHTML = '';
    $table.appendChild($tableHead)

    for (let vehicle in catalog) {
      let $tableLine = document.createElement('tr');
      for (let property in catalog[vehicle]){
        let $tableData = document.createElement('td')
        let $tableDataText = document.createTextNode(catalog[vehicle][property])
        $tableData.appendChild($tableDataText)
        $tableLine.appendChild($tableData)
      }
      $table.appendChild($tableLine);
    }

  }

  function carRegistration() {
    let carDetails = inputValues();
    console.log($vehicleControle)
    catalog[`veiculo${$vehicleControle++}`] = {
      URLImage: carDetails[0],
      brandModel: carDetails[1],
      year: carDetails[2],
      licensePlate: carDetails[3],
      color: carDetails[4]
    }
    reloadPage()
  }
  
  function inputValues () {
    let inputTypes = ['image', 'brand', 'year', 'license', 'color'];
    let carDetails = [];
    inputTypes.forEach(item => {
      carDetails.push(document.querySelector(`[data-js="input-${item}"]`).value);
    })
    return carDetails;
  }

  $button.addEventListener('click', carRegistration);

  reloadPage()

  window.catalog = catalog;


})(window, document);
