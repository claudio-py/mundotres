import Livro from "../modelo/Livro";
const livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: "Use a cabeça Java", resumo: "Resumo 1", autores: ["Autor 1", "Autor 2"] },
    { codigo: 2, codEditora: 2, titulo: "Java, como programar", resumo: "Resumo 2", autores: ["Autor 3", "Autor 4"] },
    { codigo: 3, codEditora: 3, titulo: "aprenda a vender cursos", resumo: "Resumo 3", autores: ["Autor 5", "Autor 6"] }
];
class ControleLivros {
    obterLivros():Livro[] {
        return livros;
    }
    incluir(livro: Livro) {
        livro.codigo = livros[livros.length - 1].codigo + 1;
        livros.push(livro);
    }
    excluir(codigo: number) {
        const index = livros.findIndex(livro => livro.codigo === codigo);
        livros.splice(index, 1);
        return true;
    }
}
export default ControleLivros;
