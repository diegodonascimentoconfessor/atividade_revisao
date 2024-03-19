abstract class Empresa {
    constructor(
        protected nome_empresa: string,
        protected email_empresa: string,
        protected telefone_empresa: string,
        protected endereco_empresa: string) {

    }
    mostrarDados() {
        console.log('informaçao empresa')
        console.log(` Nome Empresa: ${this.nome_empresa}`)
        console.log(`email Empresa :${this.email_empresa}`)
        console.log(`endereco:${this.endereco_empresa}`)
        console.log(`telefone: ${this.telefone_empresa}`)

    }
}


class Projeto {
    constructor(
        protected nome_projeto: string,
        protected tipo_projeto: string,
        protected id_projeto: string,
        protected prazo_inicial: Date,
        protected prazo_final: Date) {


    }
    mostrarDados() {
        console.log('informaçao Projeto')
        console.log(` Nome Projeto: ${this.nome_projeto}`)
        console.log(`Tipo projeto:${this.tipo_projeto}`)
        console.log(`Id Projeto:${this.id_projeto}`)
        console.log(`prazo incial: ${this.prazo_inicial}`)
        console.log(`prazo Final: ${this.prazo_final}`)
    }
}
const projeto1 = new Projeto('Projeto CodeTech', 'Sistema de Cadastro', 'PJ010202', new Date('2024-03-19'), new Date('2024-06-19'));


class Funcionario extends Projeto {
    constructor(
        protected id_funcionario: string,
        protected nome_funcionario: string,
        protected idade: number,
        protected equipe: string,
        protected endereco: string,
        protected cargo: string,
        protected nome_projeto: string,
        protected tipo_projeto: string,
        protected id_projeto: string,
        protected prazo_inicial: Date,
        protected prazo_final: Date) {
        super(nome_projeto, tipo_projeto, id_projeto, prazo_inicial, prazo_final);


    }
    mostrarDados() {
        console.log('Informação Funcionario')
        console.log(` id Funcionario : ${this.id_funcionario}`)
        console.log(`Nome Funcionario:${this.nome_funcionario}`)
        console.log(`idade:${this.idade}`)
        console.log(`equipe: ${this.equipe}`)
        console.log(`endereco: ${this.endereco}`)
        console.log(`cargo: ${this.cargo}`)
    }
}
const funcionario1 = new Funcionario('FN09898', 'Fabio', 35, 'EQ098', 'rua pajuçara', 'Dsenvolvedor', 'projeto cadastro', 'banco de cadastro', 'PJ 0909', new Date('2024-03-18'), new Date('2024-06-20'))
console.log(funcionario1);

class Tarefa extends Funcionario {


    constructor(
        protected andamento_projeto: string,
        protected tipo_tarefa: string,
        protected id_funcionario: string,
        protected nome_funcionario: string,
        protected idade: number,
        protected equipe: string,
        protected endereco: string,
        protected cargo: string,
        protected nome_projeto: string,
        protected id_projeto: string,
        protected prazo_inicial: Date,
        protected prazo_final: Date
    ) {
        super(id_funcionario, nome_funcionario, idade, equipe, endereco, cargo, nome_projeto, tipo_tarefa, id_projeto, prazo_inicial, prazo_final)

    }
    mostrarDados() {
        console.log('informaçao responsavel Tarefa')
        console.log(` id Funcionario: ${this.id_funcionario}`)
        console.log(`nome Funcionario:${this.nome_funcionario}`)
        console.log(`idade:${this.idade}`)
        console.log(`prazo incial: ${this.prazo_inicial}`)
        console.log(`prazo Final: ${this.prazo_final}`)
        console.log(`Equipe: ${this.equipe}`)
        console.log(`Endereco: ${this.endereco}`)
        console.log(`cargo: ${this.cargo}`)
        console.log(`Nome Projeto: ${this.nome_projeto}`)
        console.log(`Tipo Tarefa: ${this.tipo_tarefa}`)
        console.log(`ID Projeto: ${this.id_projeto}`)
    }
}
const status1 = new Tarefa('fase incial', 'Desenvolver Banco de dados', 'FN09898', 'Fabio', 35, 'EQ098', 'rua pajuçara', 'Desenvolvedor', 'projeto cadastro', 'pj0909', new Date('2024-03-18'), new Date('2024-06-18'));

class Equipe extends Funcionario {


    constructor(
        protected id_equipe: string,
        protected tarefa_equipe: string,
        protected lider: string,
        protected id_funcionario: string,
        protected nome_funcionario: string,
        protected idade: number,
        protected equipe: string,
        protected endereco: string,
        protected cargo: string,
        protected nome_projeto: string,
        protected tipo_projeto: string,
        protected id_projeto: string,
        protected prazo_inicial: Date,
        protected prazo_final: Date,

    ) {

        super(id_funcionario, nome_funcionario, idade, equipe, endereco, cargo, nome_projeto, tipo_projeto, id_projeto, prazo_inicial, prazo_final)



    }

    mostrarDados() {
        console.log('informaçao responsavel Tarefa')
        console.log(` id Funcionario: ${this.id_funcionario}`)
        console.log(`nome Funcionario:${this.nome_funcionario}`)
        console.log(`idade:${this.idade}`)
        console.log(`prazo incial: ${this.prazo_inicial}`)
        console.log(`prazo Final: ${this.prazo_final}`)
        console.log(`Equipe: ${this.equipe}`)
        console.log(`Endereco: ${this.endereco}`)
        console.log(`cargo: ${this.cargo}`)
        console.log(`Nome Projeto: ${this.nome_projeto}`)
        console.log(`ID Projeto: ${this.id_projeto}`)

    }
}
const equipe1 = new Equipe('EQ02', 'Desenvolver Banco de Dados', 'pedro', 'FN09898', 'joao', 35, 'Desenvolvedor banckend', 'Rua Brasil', 'Desenvolverdor', 'Projeto cadastro', 'cadastro', 'PJ0909', new Date('2024-03-18'), new Date('2024-06-18'));

console.log(funcionario1.mostrarDados())
console.log('======================================')
console.log(projeto1.mostrarDados())
