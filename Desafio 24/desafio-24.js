/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

(function(document, window){
  let $screen = document.querySelector('[data-js="screen"]');
  let $buttonClear = document.querySelector('[data-js="button-clear"]')
  let $buttonEqual = document.querySelector('[data-js="button-equal"]')

  let $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]')
  let $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]')

  $buttonClear.addEventListener('click', buttonClearHandler , false);

  $buttonEqual.addEventListener('click', buttonEqualHandler, false);

  Array.prototype.forEach.call($buttonsNumbers, function(button){
    button.addEventListener('click', clickValueHandler, false);
  })
  
  Array.prototype.forEach.call($buttonsOperations, function(button) {
    button.addEventListener('click', clickOPerationHandler, false);
  });

  function removeOperation(){
    let regex = new RegExp('\\D$');
    let auxiliar;
    if(regex.test($screen.value)){
      auxiliar = $screen.value.split('')
      auxiliar.pop();
      $screen.value = auxiliar.join('')
    }
  }

  function clickValueHandler(event) {
    $screen.value += this.attributes[1].value;
  }
  
  function buttonClearHandler(event){
    $screen.value = 0;
  }

  function clickOPerationHandler(event){
    removeOperation();
    $screen.value += this.attributes[1].value;
  }

  function calculo($values) {
    return $values.reduce(function(acumulado, atual){

      let firstValue = Number(acumulado);
      let operator = atual.split('')[0];
      let secondValue = Number(atual.slice(1))

      switch (operator) {
        case '+':
          return firstValue + secondValue;
        case '-':
          return firstValue - secondValue;
        case '*':
          return firstValue * secondValue;
        case '/':
          return firstValue / secondValue;
      }

    })

  }

  function buttonEqualHandler(event) {
    removeOperation();
    let $values = $screen.value.match(/\d+|[+\-\*\/]\d+/g)
    
    $screen.value = calculo($values);

  }

})(document, window)
