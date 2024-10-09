class hero:
    def __init__(self, nome, idade,classe):
        self.nome = nome
        self.idade = idade
        self.classe = classe

    def setNome(self, nome):
        self.nome = nome

    def setIdade(self, idade):
        self.idade = idade

    def setClasse(self, classe):
        self.classe = classe
        
    def getNome(self):
        return self.nome

    def getIdade(self):
        return self.idade
    
    def getClasse(self):
        return self.classe
    
    def atacar(self):
        ataque = ''
        if self.classe == 'mago':
            ataque = 'magia'
        elif self.classe == 'guerreiro':
            ataque = 'espada'
        elif self.classe == 'monge':
            ataque = 'artes marciais'
        elif self.classe == 'ninja':
            ataque = 'shuriken'
        else:
            ataque = 'ataque misterioso'
        print(f'O {self.classe} {self.nome} atacou usando {ataque}')
        
nome = input('Qual nome do seu Héroi?:')
idade = input('Qual a idade do seu Héroi?:')
classe = input('Qual tipo do seu Héroi?: (guerreiro|mago|monge|ninja)')
heroi = hero(nome,idade,classe)
heroi.atacar()
