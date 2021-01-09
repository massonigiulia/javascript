function clicou(){
    document.getElementById("thanks").innerHTML = "<b>Obrigada por clicar!!</b>";
    //console.log(document.getElementById("thanks"));
    //alert("Obrigada por clicar");
}

function redirection(){
    window.open("https://www.twitch.tv/illumynossameo/clip/CulturedCallousEggplantDuDudu?filter=clips&range=7d&sort=time");
    //window.location.href = "https://www.twitch.tv/illumynossameo/clip/CulturedCallousEggplantDuDudu?filter=clips&range=7d&sort=time";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigada por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

/*function soma(n1, n2){
    return n1+ n2;
}*/

/*function validaIdade(idade){
    var validar;
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

/*function setReplace(frase, nome, novoNome){
    return frase.replace(nome, novoNome)
}*/

//alert(soma(5, 15));
//alert(setReplace("#GoPain!", "Pain", "INTZ"));

/*var d = new Date();
alert(d.getMinutes());*/
//getHours, getMonth, getDays

/*
var count = 0;
for(count = 0; count <=5; count++){
    alert(count);
};
*/

/*var count = 0;
while (count <= 5) {
    console.log(count);
    //alert(count);
    count = count + 1;
}
*/

/*var idade = prompt("Qual sua idade?");
//var idade = 18;
if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
};
*/

/*var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert("A fruta " + frutas[1].nome + " é " + frutas[1].cor);
*/

/*var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/ 

/*var lista = ["maçã", "pera", "laranja"];
lista.push("uva");
lista.pop();*/

//console.log(lista);
//console.log(lista.toString());
//sconsole.log(lista.join(" | "));

//var nome = "Giulia Massoni";
//alert("Bem-vindo(a) " + nome);

/*var n1 = 4;
var n2 = 9;
var frase = "Pain é o melhor time do CBLOL";
alert(frase.replace("Pain", "INTZ"));
console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("Pain", "INTZ"));*/
//console.log(frase.toUpperCase());

/*var anonasc = 2002;
var anoatual = 2021;
var idade = anoatual - anonasc;
alert(nome + " tem " + idade + " anos");*/