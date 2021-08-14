(function () {
  /*
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */

  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  let person = {
      'name': 'Eduardo',
      'lastname': 'Rodrigues',
      'age': 26
  }

  
  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  
  let arr = [person.name, person.lastname, person.age]
  
  console.log( 'Propriedades de "person":', arr );
  
  /*
  Crie um array vazio chamado `books`.
  */
  let books = []

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  
  books.push({'name': 'O Poder do Habito', 'page': 350});
  books.push({'name': 'Python para datascience', 'page': 280});
  books.push({'name': 'A Historia da Matematica', 'page': 220});
 
  /*
  Mostre no console todos os livros.
  */
  console.log( '\nLista de livros:', books );

  /*
  Remova o último livro, e mostre-o no console.
  */
  let removed = books.pop();
  console.log( '\nLivro que está sendo removido:', removed );

  /*
  Mostre no console os livros restantes.
  */
   // ?
  console.log( '\nAgora sobraram somente os livros:', books );

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  books = JSON.stringify(books);
  
  /*
  Mostre os livros nesse formato no console:
  */
  console.log( '\nLivros em formato string:', books );

  /*
  Converta os livros novamente para objeto.
  */
  books = JSON.parse(books);
  console.log( '\nAgora os livros são objetos novamente:', books );
 
  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
  "[PROPRIEDADE]: [VALOR]"
  */
  for (let i=0; i <= books.length; i++){
    console.log('\n')
    for(let prop in books[i]){
      console.log(`${prop}: ${books[i][prop]}`);
    }
  }
  

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  let myName = ['E','d','u','a','r','d', 'o'];
  
  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log( '\nMeu nome é:', myName.join('') );

  
  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log( '\nMeu nome invertido é:', myName.reverse().join('') );
 

  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log( '\nAgora em ordem alfabética:', myName.sort().join(''),'\n' );
  
})();