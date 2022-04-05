export interface IFCVaga {
  id:number;
  nome:string
  descricao:string
  foto:string
  salario:number
}

export const obj: IFCVaga = {
  id: 0,
  nome: "",
  descricao:"",
  foto:"",
  salario: 0
}
export class Vaga {

  id: number = 0;
  nome: string = "";
  foto: string = "";
  descricao: string = "";
  salario: number = 0;

  constructor({id,nome,descricao,salario,foto}:IFCVaga){
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.foto = foto;
    this.salario = salario;
  }
}