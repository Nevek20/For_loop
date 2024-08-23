soma = 0
numero = 0
numero = parseInt(prompt('digite seu numero: '))

for (let i = 1; i <= numero; i++){
    if(i % 2 !== 0){
        soma += i
      }
}

console.log('soma:', soma)

// minha irma Carol me ajudou no pensamento pra montar esse código, graças a ela eu fiz td certinho