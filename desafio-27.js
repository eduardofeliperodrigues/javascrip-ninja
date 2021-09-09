/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

(function() {
  'use strict'

  function DOM(nodes){
    this.elements = document.querySelectorAll(nodes);
  };

  DOM.prototype.on = function on(event, func){
    Array.prototype.forEach.call(this.elements, function(item) {
      item.addEventListener(event, func, false);
    });
  };

  DOM.prototype.off = function off(event, func){
    Array.prototype.forEach.call(this.elements, function(item){
      item.removeEventListener(event, func, false);
    });
  };

  DOM.prototype.get = function get(){
    return this.elements;
  };

  DOM.prototype.forEach = function forEach(){
    return Array.prototype.forEach.apply(this.elements, arguments);
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.elements, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.elements, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.elements, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.elements, arguments);
  };
  
  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.elements, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.elements, arguments);
  };

  DOM.prototype.isArray = function isArray(parameter) {
    return Object.prototype.toString.call(parameter) === '[object Array]'
  };

  DOM.prototype.isObject = function isArray(parameter) {
    return Object.prototype.toString.call(parameter) === '[object Obeject]'
  };

  DOM.prototype.isFunction = function isArray(parameter) {
    return Object.prototype.toString.call(parameter) === '[object Function]'
  };

  DOM.prototype.isNumber = function isArray(parameter) {
    return Object.prototype.toString.call(parameter) === '[object Number]'
  };

  DOM.prototype.isString = function isArray(parameter) {
    return Object.prototype.toString.call(parameter) === '[object String]'
  };

  DOM.prototype.isBoolean = function isArray(parameter) {
    return Object.prototype.toString.call(parameter) === '[object Boolean]'
  };

  DOM.prototype.isNull = function isArray(parameter) {
    return (Object.prototype.toString.call(parameter) === '[object Null]') || (Object.prototype.toString.call(parameter) === '[object Undefined]')
  };

  console.log(DOM.prototype.isNull(undefined))

})(window, document);
