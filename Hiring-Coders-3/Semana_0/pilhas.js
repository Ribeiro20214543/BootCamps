
//Pilha ou FILO (First-In, Last-Out) significa o primeiro que entra é o último que sai.

var elementos = [];
var topo = -1;
const MAX = 10;

function push(num) {
    if (topo < MAX) {
         topo = topo + 1;
         elementos[topo] = num;
    } 
    else {
        console.log("Pilha esta cheia");
    }  
}

function estaVazia(){
    return topo === -1;
}

function pop() {
    if (topo != -1) {
        let num = elementos[topo];
        topo = topo - 1;
        return num;
    }
    else {
        console.log("Pilha esta vazia!");
    }
}


 //---parte do codigo que usa a pilha I -- //
 
 push(10);
 push(20);
 push(30);

 console.log(elementos);
 
 console.log(pop());
 console.log(pop());
 console.log(pop());

  //---parte do codigo que usa a pilha II -- //

  // 10 / 2
  //      0  5 / 2
  //        1   2 / 2
  //            0   1 / 2
  //                1   0
  //            10 decimal é  = ao valor 1010

  var numDecimal = 10;
  var resto;

  console.log("Hora de empilhar....");
  while (numDecimal != 0) {
      resto = parseInt(numDecimal % 2);
      push(resto);
      console.log(resto) ;
      numDecimal = parseInt(numDecimal / 2);
  }

  console.log("Desempilhando tudooooooooooo........");
  while (!estaVazia()){
      console.log(pop());
  }