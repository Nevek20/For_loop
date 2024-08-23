function numeral(){
    numero = 0
    numero = parseInt(prompt('Digite: '))

    resultado = 0
    for (resu = 0; resu <= 10; resu += 1)
        resultado = numero + 'x' + tabuada + '=' + (numero * tabuada)
    console.log(resultado)
}
numeral()

//obrigado, ryan :)