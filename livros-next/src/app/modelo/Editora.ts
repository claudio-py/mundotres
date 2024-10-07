  interface IEditora {
     codEditora: number; 
      nome: string;
    }
    class Editora implements IEditora {
        codEditora: number;
        nome: string;
        
        constructor(codEditora: number, nome: string) {
            this.codEditora = codEditora;
            this.nome = nome;
        }
    }
    export default Editora;
