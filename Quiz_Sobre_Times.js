
import resposta from "readline-sync";

//Coleção de perguntas de times
let Perguntas_de_TimesAleatorio = [
{pergunta:"Em qual ano o palmeiras foi fundado?", "a":1914, "b":1909, "c":1902, Correta:"a",vezes:0},
{pergunta:"Em qual ano o Corinthians conquistou o segundo título Mundial?", "a":2014, "b":2012,"c":2017, Correta:"b",vezes:0},
{pergunta:"Qual ano pelé fez o milésimo Gol pelo Santos?" ,"a":1965, "b":1959, "c":1969, Correta:"c",vezes:0},
{pergunta:"Neymar estreou pela seleção Brasileira com quantos anos?", "a":18, "b":21,"c":16, Correta:"a",vezes:0},
{pergunta:"Qual ano aconteceu a tragédia da Chapecoense?", "a":2014, "b":2016, "c":2019, Correta:"b",vezes:0},
{pergunta:"Em qual ano, O Corinthians aplicou 6 x 1 no São paulo?", "a":2013, "b":2019, "c":2015, Correta:"c",vezes:0},
{pergunta:"O são paulo conquistou o primeiro mundial em qual ano?", "a":2002, "b":2004, "c":1992, Correta:"c",vezes:0},
{pergunta:"Qual time tem o apelido de Sem Mundial?", "a":"Palmeiras", "b":"Vasco", "c":"Flamengo", Correta:"a",vezes:0},
{pergunta:"Qual time tem o apelido de Cheirinho?", "a":"Corinthians","b":"Vasco",  "c":"Flamengo", Correta:"c",vezes:0},
{pergunta:"Quem perdeu o gol nas Quartas de finais da libertadores entre Vasco X Corinthians em São Januário?", "a":"Sebástian Ferreira", "b":"Jonathan", "c":"Pipico", Correta:"a",vezes:0},
{pergunta:"Em qual ano o Corinthians teve o seu primeiro rebaixamento? ","a":2009, "b":2004, "c":2007, Correta:"c",vezes:0},
{pergunta:"O Flamengo conquistou foi tri da liberta em qual ano? ", "a":2022, "b":2020, "c":2023, Correta:"a",vezes:0},
{pergunta:"Qual time que possui 4 rebaixamentos? ", "a":"Palmeiras", "b":"Vasco da Gama", "c":"Santos", Correta:"b",vezes:0},
{pergunta:"Qual jogador fez gol e comemorou em cima do Escudo do São Paulo no jogo entre São Paulo x Santos?", "a":"Diego Ribas", "b":"Elano", "c":"Emerson Leão", Correta:"a",vezes:0},
{pergunta:"Quais times não possuem rebaixamentos? ", "a":"São Paulo,Flamengo e Cuiabá", "b":"Santos, Fluminense e Corinthians", "c":"Vasco, Botafogo e Palmeiras", Correta:"a",vezes:0},
{pergunta:"Qual jogador fez o gol do rebaixamento do Palmeiras em 2012? ", "a":"Fabiano Oliveira", "b":"Paulo Sérgio", "c":"Vagner Love", Correta:"c",vezes:0},
{pergunta:"Quem eliminou o Palmeiras na semiFinal da Libertadores em 2018?", "a":"River Plate", "b":"Independiente Del Valle", "c":"Boca Juniors", Correta:"c", vezes:0},
{pergunta:"Quem é rival direto do Corinthians? ", "a":"Flamengo", "b":"Atlético Paranaense", "c":"Palmeiras", Correta:"c",vezes:0},
{pergunta:"Quem é rival direto do Atlético Mineiro? ", "a":"Grêmio", "b":"Cruzeiro", "c":"América Mineiro", Correta:"b",vezes:0},
{pergunta:"Qual é o título mais Importante pro cruzeiro?", "a":"Libertadores", "b":"Copa Do Brasil", "c":"Brasileirão", Correta:"b",vezes:0},
{pergunta:"Qual time tem a maior torcida do Brasil? ", "a":"Corinthians", "b":"Flamengo", "c":"Internacional", Correta:"b",vezes:0},
{pergunta:"Em qual ano o Grêmio venceu Sua primeira Libertadores?", "a":1983, "b":1990, "c":1986, Correta:"a",vezes:0},
{pergunta:"Qual desses times foi ajudado pelo arbitro na Libertadores de 2013 contra o Corinthians? ", "a":"Flamengo","b":"Boca Juniors", "c":"Estudiantes", Correta:"b",vezes:0},
{pergunta:"Qual torcida tem o apelido de Porco", "a":"Corinthians", "b":"Vasco", "c":"Palmeiras", Correta:"c",vezes:0},
{pergunta:"Em qual ano o Internacional venceu o mundial?", "a":2010,"b":2006, "c":2002, Correta:"b",vezes:0},
{pergunta:"Quem tem mais vitórias Atlético Mg ou Cruzeiro?", "a":"Atlético Mg", "b":"Cruzeiro", "c":"Empate", Correta:"a",vezes:0},
{pergunta:"Qual é o único time que tem 3 Mundiais?", "a":"Corinthians", "b":"São Paulo", "c":"Palmeiras", Correta:"b",vezes:0},
{pergunta:"O Internacional foi fundado em qual ano?", "a":1910, "b":1932, "c":1909, Correta:"c",vezes:0},
{pergunta:"O Neymar fez seu primeiro gol pelo Santos em qual desses anos? ", "a":2012, "b":2009, "c":2014, Correta:"b",vezes:0},
{pergunta:"Quem venceu mais o duelo de (Alvinegros) entre Corinthians X Santos? ", "a":"Santos", "b":"Corinthians", "c":"Empate", Correta:"b",vezes:0},
];

//Função Resposta do usuário
function respostaDoUser (resposta){
let Resposta = resposta.question("Responda : ");
return Resposta;
}

//Função retorna Pergunta aleatória
const Aleatorio = (valor) => {
let resposta = "a) : b) : c) : "    

return `${valor.pergunta}

${resposta.substring(0,5)}${valor["a"]}
${resposta.substring(5,10)}${valor["b"]}
${resposta.substring(10,15)}${valor["c"]}

`
}

//Função verifica pontos 
function verificaPontos(User,Correta,math){
return User === Correta[math]
}   

function RetornaResposta (comecaum,pontosFinal, Nome){

if(comecaum === 10 || comecaum === 20 || comecaum === 30)
{

if(pontosFinal >= 8 && pontosFinal <= 10 || pontosFinal >= 18  && pontosFinal <= 20  || pontosFinal >= 28 && pontosFinal <= 30){   
console.log(`\nMaravilha! ${Nome} a Sua pontuação é ${pontosFinal} Você é Fabuloso(a) parabéns mestre(a) do futebol`);

if(pontosFinal === 10){
console.log("Parabéns você acertou dez questões e desbloqueou o nível I Do Futebol transcendeu")
}
else if(pontosFinal === 20){
console.log("Muito bem Você acertou vinte questões Agora! Desbloqueou o Nível II do Futebol Rei Dos Times")
}
else if(pontosFinal === 30){
console.log("WOW! Temos um novo Campeão Parabéns! " + Nome  + " Você acertou todas as questões Você é o Rei Supremo do Futebol")
}

}
else if(pontosFinal >= 5 && pontosFinal <= 7 || pontosFinal >= 15 &&  pontosFinal <= 17 || pontosFinal >= 25 && pontosFinal <= 27){
console.log(`\nEstá bom até ${Nome} a Sua pontuação é ${pontosFinal} é uma pontuação e tanta`)    
}
else if(pontosFinal < 5){
console.log(`\nPoxa ${Nome} a Sua pontuação é ${pontosFinal} Você não entende nada de futebol`)
}
}
}

//Função retorna Reação da resposta
function VerificaResposta(respostaUser,respostaCorreta,math,Pergunta) {
let Reacao = ""

if(respostaUser === respostaCorreta[math])
{
Reacao = `\nVocê acertou é a letra ${respostaCorreta[math]} : ${Pergunta[math][respostaCorreta[math]]}`;    
}
else if(respostaUser === "" || (respostaUser !== "a") !== (respostaUser !== "b") !== (respostaUser !== "c"))
{
Reacao = "\nVocê não digitou uma resposta válida";
}
else 
{
Reacao = `\nVocê errou não é a letra ${respostaUser} : ${Perguntas_de_TimesAleatorio[math][respostaUser]}`;
}
return Reacao
} 

//Função da apresentação final
function apresentacao () {
let Nome = resposta.question("Antes de começarmos, Por favor Digite seu nome : ");

let limiteDeExecucaoThird = 10
let contadorPontos = 0;


for(let i = 1; i <= limiteDeExecucaoThird; i++){

let  LaFemmeEtLhome = Math.floor(Math.random() * Perguntas_de_TimesAleatorio.length);

if(Nome === "" ){
console.log("Por favor digite um nome válido")
break;
}
else if(i === 1)
{
console.log("\n"+ "Olá " + Nome +  ", Seja muito bem vindo(a), Abaixo você irá responder as perguntas" + "\n")
console.log(`O game tem 30 questões cada uma com resposta específica 
más não se preocupe, pois cada rodada é divida em 10 questões cada, 
chegando ao final o programa irá mostrar sua pontuação e se você 
quer continuar.

Se Você conseguir responder 10 questões corretamente terá uma mensagem
Surpresa no final.

Responda as perguntas com os seguintes caracteres (a, b ou c)
a medida que for respondendo o programa mostrara se está correta
ou não.

Boa sorte no seu jogo divirta-se. 
`)
}

let  um             = i  + "."
let  ReacaoDaResposta

let  pergunta  = Perguntas_de_TimesAleatorio.map(Aleatorio);
console.log(`
${um}${pergunta[LaFemmeEtLhome]}`);

function Correct(valor){
return valor.Correta;
}

let respostaUser = respostaDoUser(resposta);

let Filtrar      = Perguntas_de_TimesAleatorio 

//Mapeando resposta Correta
const respostaCorreta = Filtrar.map(Correct);
ReacaoDaResposta = VerificaResposta(respostaUser,respostaCorreta,LaFemmeEtLhome,Filtrar);

//Pontos do usuário
let comparacao = verificaPontos(respostaUser,respostaCorreta,LaFemmeEtLhome);
let pontosFinal = comparacao === true ? ++contadorPontos : contadorPontos ;
console.log(ReacaoDaResposta);

let executado = Perguntas_de_TimesAleatorio[LaFemmeEtLhome].vezes += 1
if(executado === 1){
Perguntas_de_TimesAleatorio.splice(LaFemmeEtLhome , 1)
}

//Verifica se os pontos é maior ou menor e retorna mensagem
RetornaResposta(i,pontosFinal, Nome);

if(i === 10 || i === 20 || i === 30){

if(i === 30){
break;
}

let newResposta = resposta.question("\nVocê quer continuar? ")

if(newResposta === "Sim" || newResposta === "sim"){
limiteDeExecucaoThird += 10
}
else if(newResposta === "" || newResposta === "nao" || newResposta === "Nao"){
console.log("Programa encerrado")    
}
else {
console.log("Por favor digite uma resposta válida");
}

}

}
}

//Apresentação final
apresentacao();