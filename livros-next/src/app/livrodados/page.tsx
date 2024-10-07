"use client";
import { useState } from 'react';
import Livro from '../modelo/Livro';
import Editora from '../modelo/Editora';
import ControleEditora from '../controle/ControleEditora';
// import { useRouter } from 'next/router';
const baseUrl = "http://localhost:3000/api/livros";

export default function LivroDados() {
  // const router = useRouter(); 
    const controleEditora = new ControleEditora();
    const opcoes = controleEditora.getEditoras().map((editora: Editora) => {
        return { value: editora.codEditora, text: editora.nome };
    });
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);


    function tratarCombo(event: React.ChangeEvent<HTMLSelectElement>) {
        setCodEditora(Number(event.target.value));
    }
    async function incluirLivro(livro: Livro) {
        const resposta = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(livro)
        });
        return resposta.ok;
    }
  // const navigate = router.push;
    function incluir(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const livro = new Livro(0, codEditora, titulo, resumo, autores.split('\n'));
        incluirLivro(livro);
        // navigate('/livrolista');
    }
   

    return (
        <main className='p-3'>
            <h2>Inclusão de Livro</h2>
            <form role="form" onSubmit={incluir}>
                <div className="form-group">
                  <label>Título:</label>
                  <input className='form-control' type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Resumo:</label>
                  <textarea className='form-control'value={resumo} onChange={(e) => setResumo(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Autores:</label>
                  <textarea className='form-control'value={autores} onChange={(e) => setAutores(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Editora:</label>
                  <select className='form-select'value={codEditora} onChange={tratarCombo}>
                      {opcoes.map((opcao, i) => (
                          <option key={i} value={opcao.value}>{opcao.text}</option>
                      ))}
                  </select>
                </div>
                <button className='mt-3' type="submit">Incluir</button>
            </form>
        </main>
  
  );
}


