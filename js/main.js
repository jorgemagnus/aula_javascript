var nome = "Jorge Magnus"
var idade = 46;
var idade2 = 10;
var idade3 = idade + idade2;
var frase ="Japão é o melhor time do mundo.";
var lista = ["maça","pera","laranja" ];
var fruta ={nome:"abacate", cor:"verde"};
var frutas =[{nome:"Laranja",cor:"Amarelo"},{nome:"Uva",cor:"Roxa"}];

//para comentar uma linha
/*
  usa para comentar mais de uma linha.
*/

//somei o idade + idade2
//alert("Sr(a) "+ nome+" tem "+idade3+" anos");

//para ver as saídas do comando console no navegador, F12 , console.
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(idade * idade2);
console.log(idade3);

//listas.
console.log(lista);
console.log(lista[1]);
alert(lista[2]);
lista.pop();
lista.push("uva","mamão");
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.toString());
console.log(lista.join(" - "));
console.log(lista.join(" / "));

//Dicionários.
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
console.log(frutas);
console.log(frutas[0].nome);
console.log(frutas[0].cor);
console.log(frutas[1].nome);
console.log(frutas[1].cor);

//condicionais.

//Usando o while:

var idadeBoy = prompt("Qual sua idade:");
if (idadeBoy >= 18){
   console.log("Se for maior/igual a 18, Maior de idade pois sua idade é: "+idadeBoy);
}else{
    console.log("Se for menor que 18, Menor de idade pois sua idade é: "+idadeBoy);
};

var  i = prompt("Informe Número para gerar o laço While: ");
     contador = 0;
console.log("Usando o While:")
while (contador <= i){
  console.log(contador);
  contador++;
};

//usando o for:
console.log("Usando o For:")
var ix = prompt("Informe Número para garar o laço For: "); 
var x;
for(x = 0;x <= ix;x++){
  console.log(x);
}

//Usando data.
var d = new Date;
console.log(d);
console.log(d.getMonth()+1);
console.log("Dia: "+ d.getDate());
console.log("Horas: "+ d.getHours());
console.log("Minutos: "+ d.getMinutes());

//Funções:
function soma(n1,n2){
  return n1+n2;
}

console.log(soma(10,15));
alert("O Resultado da soma de 10 e 15 na função soma é: "+soma(10,15));

function botao(){
  alert("Parabêns, seu primeiro botão!");
  document.getElementById("h3texto").innerHTML = "<b>Obrigado por Clicar</b>";
}

function redirecionar(){
  window.open("https://conectesus-paciente.saude.gov.br/");
}

function trocar(elemento){
  //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse aqui.";
  elemento.innerHTML = "Obrigado por passar o mouse aqui.";
}

function voltar(elemento){
 // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
  elemento.innerHTML = "Passe o mouse aqui.";
}

function carregando(){
  alert("Página carregada.");
 }

function pegarvalor(elemento){
  console.log(elemento.value);
}


