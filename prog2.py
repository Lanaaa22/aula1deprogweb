# Exercício Python 100: Faça um programa que tenha uma lista chamada números e duas funções chamadas sorteia() e somaPar().
# A primeira função vai sortear 5 números e vai colocá-los dentro da lista e a segunda função vai mostrar a soma entre
# todos os valores pares sorteados pela função anterior.
from random import randint
from time import sleep
def sorteia(l,par):
    for i in range(0,5):
        s = randint(0,10)
        l.append(s)
    for c,u in enumerate(l):
        sleep(1)
        print(u, end=" ")
        if u % 2 == 0:
            par.append(u)


def somaPar(l,par):
    s = 0
    for v in l:
        if v % 2 == 0:
            s += v
    print(f'A soma de {par} é {s}')



def main():
    par = []
    l = []
    sorteia(l,par)
    print(f'os valores pares são {par}')
    somaPar(l,par)

if _name_ == '_main_':
    main()
