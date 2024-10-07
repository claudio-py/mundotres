import { controleLivro } from '../route';
import { NextResponse } from 'next/server';

export async function DELETE(request: Request, context: any) {
  const { params } = context;
  const codigo = Number(params.codigo);
  const deleteLivro = controleLivro.excluir(codigo);

  if (deleteLivro) {
    return NextResponse.json({ message: 'Livro excluído com sucesso' });
  } else {
    return NextResponse.json({ error: 'Livro não encontrado' }, { status: 404 });
  }
}
