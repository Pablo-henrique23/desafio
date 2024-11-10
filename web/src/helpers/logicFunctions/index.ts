export const getNoFibonacciNumber = (n: number): number => {
  //to do
  let seq_fib = [0, 1];
  let comparador = 1; // vai ser usado para comparar se o um numero sequencial (1,2,3,...) ta na sequencia
  let contador = 0; // conta em qual numero que nao pertence a sequencia estamos

    
  if (n <= 0) {
    return null;
  }

  while (true) {
    
    seq_fib.push(seq_fib[seq_fib.length - 2] + seq_fib[seq_fib.length - 1]); 

  
    if (!seq_fib.includes(comparador)) {
      contador++;
      if (contador === n) {
        break; // encontramos n numeros, sai imediatamente
      }
    }

    comparador++; 
  }
  return comparador;
};
