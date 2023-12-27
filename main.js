// afio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante
 
const nomeHeroi = "juan";
const xpHeroi = 14090;
const niveis=['Ferro','Bronze','Prata','Ouro','Platina','Ascendente','Imortal','Radiante'];
const frase =`O Herói de nome ${nomeHeroi} está no nível de:`;

for(let i = 0; i < niveis.length; i++){
    if(xpHeroi < 1000){
        console.log(`${frase} ${niveis[0]}`);
        break;
    }
    else if(xpHeroi > 1001 && xpHeroi < 2000){
        console.log(`${frase} ${niveis[1]}`);
        break;
    }
    else if(xpHeroi > 2001 && xpHeroi < 5000){
        console.log(`${frase} ${niveis[2]}`);
        break;
    }
    else if(xpHeroi > 5001 && xpHeroi < 7000){
        console.log(`${frase} ${niveis[3]}`);
        break;
    }
    else if(xpHeroi > 7001 && xpHeroi < 8000){
        console.log(`${frase} ${niveis[4]}`);
        break;
    }
    else if(xpHeroi > 8001 && xpHeroi < 9000){
        console.log(`${frase} ${niveis[5]}`);
        break;
    }
    else if(xpHeroi > 9001 && xpHeroi < 10000){
        console.log(`${frase} ${niveis[6]}`);
        break;
    }
    else if(xpHeroi > 10000){
        console.log(`${frase} ${niveis[7]}`);
        break;
    }
}