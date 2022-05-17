matriz = []
for (let i = 0; i < 3; i++){
    x = Math.floor(Math.random()*9)
    y = Math.floor(Math.random()*9)
    z = Math.floor(Math.random()*9)
    matriz.push([x, y, z])
    console.log("|",matriz[i][0],matriz[i][1],matriz[i][2],"|");
    matriz[i][0][0]*=2
    matriz[i][1][1]*=2
    matriz[i][2][2]*=2
    console.log("|",matriz[i][0],matriz[i][1],matriz[i][2],"|");
}