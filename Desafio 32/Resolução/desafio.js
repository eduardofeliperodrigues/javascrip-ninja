(function (document, window) {
  'use strict'

  let $tableBody = document.querySelector('[data-js="vehicles-table"]')
  let $buttonCreateCar = document.querySelector('[data-js="buttonCreateCarRecord"]')

  $buttonCreateCar.addEventListener('click', buttonCreateCarHandler, false)

  function buttonCreateCarHandler() {
      createCarRecord()
  }

  function buttonDeleteHandler(event) {
      event.preventDefault()
      this.parentElement.parentElement.remove()
  }

  function buttonDelete(buttons) {
      Array.prototype.forEach.call(buttons, item => {
          item.addEventListener('click', buttonDeleteHandler, false)
      })
  }

  function shopName() {
      let ajax = new XMLHttpRequest()
      ajax.open('GET', 'desafio.json')
      ajax.send()

      ajax.addEventListener('readystatechange', shopNameHandler,false);

      function shopNameHandler() {
          if (ajax.readyState === 4) {
              console.log(ajax.responseText)
          }
      }
  }

  function loadTable() {
      let ajax = new XMLHttpRequest()    
      ajax.open('GET', 'http://localhost:3000/car')
      ajax.send()

      ajax.addEventListener('readystatechange', loadTableHandler, false)

      function loadTableHandler() {
          if(ajax.readyState === 4){
              let response = JSON.parse(ajax.responseText)
              response.forEach(item => {
                  let $tableRow = document.createElement('tr')
                  for (let key in item) {
                      let $tableCell = document.createElement('td')
                      let $cellData = document.createTextNode(item[key]);
                      $tableCell.appendChild($cellData)
                      $tableRow.appendChild($tableCell)
                  }
                  let $tableCell = document.createElement('td')
                  let $buttonDeleteRow = document.createElement('button')
                  let $cellData = document.createTextNode('Deletar')

                  $buttonDeleteRow.setAttribute('data-js', 'buttonDeleteRow')
                  $buttonDeleteRow.appendChild($cellData)
                  $tableCell.appendChild($buttonDeleteRow)
                  $tableRow.appendChild($tableCell)

                  $tableBody.appendChild($tableRow)

              })

              let $buttonsDelete = document.querySelectorAll('[data-js="buttonDeleteRow"]')
              
              buttonDelete($buttonsDelete);
              
          }
      }    

  }

  function createCarRecord() {
      let ajax = new XMLHttpRequest()
      ajax.open('POST', 'http://localhost:3000/car')
      ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

      let catalog = captureCarDetails()

      ajax.send(`image=${catalog[0]}&brandModel=${catalog[1]}&year=${catalog[2]}&plate=${catalog[3]}&color=${catalog[4]}`)

      ajax.addEventListener('readystatechange', createCarRecordHandler, false)

      function createCarRecordHandler() {
          if (ajax.readyState === 4) {
              loadTable()
              console.log('Cadastro criado com sucesso!')
          }
      }

  }

  function captureCarDetails() {
      let inputTypes = ['image', 'brand', 'year', 'plate', 'color'];
      let carDetails = [];
      inputTypes.forEach(item => {
          carDetails.push(document.querySelector(`[data-js="input-${item}"]`).value);
      })

      return carDetails;
  }

  function app() {
      return {
          init: function() {
              shopName()
              loadTable()
          }
      }
  }

  app().init()

})(document, window);
