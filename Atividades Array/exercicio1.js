var nomes = ['Pedro','Miguel','Amanda','Nicole','Roberto'];

console.log(nomes.length);

nomes.forEach(function (item, indice, array){
    console.log(item, indice);
});

var primeiro = nomes[0];
console.log("primeiro nome = " + nomes[0])

var ultimo = nomes[4]
console.log("último nome = " + nomes[4])