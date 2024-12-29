let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

console.log("La cantidad de atletas son " + atletas.length + ".");


for (let i = 0; i < atletas.length; i++) {
    console.log("------")
    console.log("Atletas: " + atletas[i].nome);
    console.log("Notas obtidas: " + atletas[i].notas);
    
    let notas = atletas[i].notas.sort(function(a,b){
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return - 1;
        }
        else {
            return 0;
        }
    });
    
    let notasComputadas = notas.slice(1, 4);
    
    let soma = 0;
    let media = 0;
    notasComputadas.forEach(function(notas){
        soma = soma + notas;
        media = soma / notasComputadas.length
        return media;
    });
    
    console.log("Media valida: " + media)
}