let num = [2, 23, 3, 34, 15, 25, 45, 44, 59, 66, 74, 7, 83, 8, 9]

function ordenarNumero(a,b){
    return a - b
}

console.table(num)
num.sort()
console.table(num)
num.sort(ordenarNumero(num))
console.table(num)