
class Empresa{
 nome_empresa: string;
 email_empresa:string;
 telefone_empresa:string;
endereco_empresa:string;
constructor(nome_empresa:string,email_empresa:string,telefone_empresa:string,endereco_empresa:string){
 this.nome_empresa=nome_empresa;
 this.email_empresa=email_empresa;
 this.endereco_empresa=endereco_empresa;
 this.telefone_empresa=telefone_empresa;
}

}


const empresa_1 new Empresa('CodeTech' )
class  Projeto  {
    nome_projeto: string ;
     tipo_projeto:string
     id_projeto:string;
     Prazo_inicial: Date;
     Prazo_final:Date;
    constructor(nome_projeto: string, tipo_projeto: string,  id_projeto: string, prazo_incial :Date, Prazo_final:Date) {
      console.log('informação do Projeto')
      this.nome_projeto= nome_projeto ;
      this.tipo_projeto=tipo_projeto;
      this.id_projeto=id_projeto;
      this.Prazo_inicial=prazo_incial;
      this.Prazo_final=Prazo_final
}
}

const  projeto1 = new Projeto (' projeto CodeTech', 'sistema de cadastro ',"PJ010202", new Date ('2024-03-19'), new Date ('2024-06-19'))


console.log(projeto1)





class Funcionario {
id_funcionario: string;
nome_funcionario: string;
idade: number;
equipe:string;
endereco:string
cargo: string
constructor(id_funcionario:string,nome_funcionario:string, idade:number,equipe: string,endereco:string,cargo:string){
console.log('informação do Funcionario')
this.id_funcionario=id_funcionario;
this.nome_funcionario= nome_funcionario;
this.idade=idade;
this.equipe=equipe;
this.endereco=endereco
this.cargo=cargo
}

}

const Funcionario1= new Funcionario ('FN010202', "Diego",34,'Desenvolvimento','Rua pajuçara','Desenvolvedor')

console.log (Funcionario1)



class Status_tarefa {
andamento_projeto: string 

constructor(andamento_projeto:string){
    this.andamento_projeto= andamento_projeto;
}
}




const Status1 = new Status_tarefa('Fase incial')


class Equipe{
id_equipe: string;
Tarefa_equipe: string;
lider:string 


constructor(id_equipe:string,tarefa_equipe:string,lider:string){
 console.log('informação equipe')
 this.id_equipe=id_equipe;
 this.Tarefa_equipe= tarefa_equipe
 this.lider=lider

}

}

const equipe1 = new Equipe('EQ0203','desenvolver banco de Dados ', 'pedro')

console.log (equipe1)