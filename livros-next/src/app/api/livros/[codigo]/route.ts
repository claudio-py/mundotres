// ./src/app/api/livros/[codigo]/route.ts
// Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
// import controleLivro from '../route';
import { NextResponse } from 'next/server';
import ControleLivros from '../../../controle/ControleLivros';
const controleLivro= new ControleLivros();

export async function DELETE(request: Request, context: { params: { codigo: string } }) {
  const { params } = context;
  const codigo = Number(params.codigo);
  const deleteLivro = controleLivro.excluir(codigo);

  if (deleteLivro) {
    return NextResponse.json({ message: 'Livro excluído com sucesso' });
  } else {
    return NextResponse.json({ error: 'Livro não encontrado' }, { status: 404 });
  }
}
