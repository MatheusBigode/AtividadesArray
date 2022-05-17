matriz = []
for (let i = 0; i < 2; i++){
    a = Math.floor(Math.random()*10)
    b = Math.floor(Math.random()*10)
    matriz.push([a, b])
    console.log("|",matriz[i][0],matriz[i][1],"|");
}