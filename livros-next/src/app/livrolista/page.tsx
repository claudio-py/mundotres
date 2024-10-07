"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import LinhaLivro from '../componentes/LinhaLivro';
import Livro from '../modelo/Livro';

export default function LivroLista() {
  const baseURL = "http://localhost:3000/api/livros";
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

  const obter = async () => {
    const resposta = await fetch(baseURL);
    const dados = await resposta.json();
    setLivros(dados);
    setCarregado(true);
  };

  const excluir = async (codigo: number) => {
    const resposta = await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE'
    });
    if (resposta.ok) {
      console.log('Livro excluído com sucesso');
      setCarregado(false);
    } else {
      console.log('Livro não encontrado');
    }
  };

  useEffect(() => {
    if (!carregado) {
      obter();
    }
  }, [carregado]);

  return (
    <div >
      <Head>
        <title>Lista de Livros</title>
      </Head>
      <main className="p-3">
        <h1 >Lista de Livros</h1>
        <table className="table table-striped table-bordered">
          <thead className="bg-body-secondary">
            <tr>
              <th>Título</th>
              <th>Resumo</th>
              <th>Editora</th>
              <th>Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
