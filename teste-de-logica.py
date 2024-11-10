'''
Aqui, você terá que criar uma buscador em uma sequência não fibonacci.

Se você não conhece, o vetor de Fibonacci consiste na soma dos últimos dois algarismos da mesma equação:

   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

O objetivo desse exercício é trazer o enésimo número não pertencente à esta sequência.

Se digitar 0: deve retornar erro. Se digitar 1, deve aparecer 4. Se digitar 2, deve aparecer 6. E assim por diante.
'''
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('n', type=int, help='N-esimo número não pertencente à sequência de Fibonacci')
args = parser.parse_args()
n = args.n
def notFib(n:int):
    seq_fib = [0, 1]

    if n <= 0:
        return 0

    contador = 0 # vai contar quantos numeros nao pertencentes à sequencia ja achamos
    comparador = 1 # será usado para salvar qual é o numero que ocupa a posição N dos nao pertencentes

    while True: # enquanto nao acharmos o n-esimo numero, continuamos

        seq_fib.append(seq_fib[-2] + seq_fib[-1]) # fazer assim poupa processamento e evita recursividade

        if comparador not in seq_fib:
            contador += 1
            if contador == n:
                break
        
        comparador += 1
    return comparador

def principal(n):
    return notFib(n)

if __name__ == '__main__':
    print(principal(n), end='')
