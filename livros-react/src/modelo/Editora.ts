//a) No arquivo Editora.ts, criar a classe Editora, com os campos codEditora, numérico, e nome, do tipo texto
  interface Editora {
     codEditora: number; 
      nome: string;
    }
    class Editora {
        constructor(codEditora: number, nome: string) {
            this.codEditora = codEditora;
            this.nome = nome;
        }
    }
    export default Editora;
