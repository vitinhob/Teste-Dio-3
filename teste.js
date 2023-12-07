class heroi
{
    constructor (nome, idade, tipo)
    {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar()
    {
        let magia = "magia"
        let espada = "espada"
        let artesMarciais = "artes maciais"
        let churiken = "shuriken"
        console.log(`O ${this.tipo} atacou usando ${magia}`)
    }
    escrever()
    {
        console.log(`O ${this.nome} de ${this.idade} anos é um ${this.tipo}`)
        console.log("Ao se deparar com um monstro")
    }
}

let heroiMago = new heroi("Andarilho", 190, "Mago")
heroiMago.escrever()
heroiMago.atacar()