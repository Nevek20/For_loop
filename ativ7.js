palavras = '';
vogal = [];
soma = 0;
palavras = prompt('digite uma palavra: ');
vogal = palavras.split('');
vogais = ['a', 'e', 'i', 'o', 'u'];

for (let i = 1; i <= vogal.length; i++) {
  for (let k = 1; k<= vogais.length; k++) {
      if(vogal[i-1] === vogais[k-1]) {
        soma++;
      }
   }
}
console.log('soma:', soma);
console.log('Palavra: ', palavras);

// n entendi mt pq minha irma q me ajudou, mas graças a ela eu consegui terminar, obrigado Carol :)