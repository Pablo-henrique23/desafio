'''
Aqui, você terá que criar uma buscador em uma sequência não fibonacci.

Se você não conhece, o vetor de Fibonacci consiste na soma dos últimos dois algarismos da mesma equação:

   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

O objetivo desse exercício é trazer o enésimo número não pertencente à esta sequência.

Se digitar 0: deve retornar erro. Se digitar 1, deve aparecer 4. Se digitar 2, deve aparecer 6. E assim por diante.
'''

seq_fib = [0, 1]
n = int(input('Digite um número: ')) # n-esimo numero fora da sequencia

if n == 0:
    raise Exception("Número inválido.")


contador = 0 # vai contar quantos numeros nao pertencentes à sequencia ja achamos
comparador = 1 # será usado para salvar qual é o numero que ocupa a posição N dos nao pertencentes

while True: # enquanto nao acharmos o n-esimo numero, continuamos

    seq_fib.append(seq_fib[-2] + seq_fib[-1]) # fazer assim poupa processamento e evita recursividade

    if comparador not in seq_fib:
        contador += 1
        if contador == n:
            break
    
    comparador += 1


print(f"O {n}° número não pertencente à Sequência de Fibonacci é {comparador}.")