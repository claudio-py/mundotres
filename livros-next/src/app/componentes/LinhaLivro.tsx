import ControleEditora from '../controle/ControleEditora';
import Livro from '../modelo/Livro';
const controleEditora = new ControleEditora();

interface LinhaLivroProps {
    livro: Livro;
    excluir: (codigo: number) => void;
}

const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>
                <div>
                  {livro.titulo}
                </div>
                <button onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
            <td>
                {livro.resumo}
            </td>
      <td>{nomeEditora}</td>
            <td>
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};
export default LinhaLivro;
