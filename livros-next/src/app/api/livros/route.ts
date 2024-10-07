//api/livros/route.ts
import ControleLivros from '../../controle/ControleLivros';
const controleLivro= new ControleLivros();
import { NextResponse} from 'next/server';
import Livro from '../../modelo/Livro';
//###############################
export async function GET(){
  return NextResponse.json(controleLivro.obterLivros())
}
//################################

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the request body
    const { codEditora, titulo, resumo, autores } = body;

    if (!codEditora || !titulo || !resumo || !autores) {
      return NextResponse.json({ mensagem: 'Missing required fields' }, { status: 400 });
    }

    const novoLivro = new Livro(0, codEditora, titulo, resumo, autores);
    controleLivro.incluir(novoLivro);

    return NextResponse.json({ mensagem: 'Livro incluído com sucesso' });
  } catch (erro: unknown) {
    if (erro instanceof Error) {
      return NextResponse.json({ mensagem: erro.message }, { status: 500 });
    }
    return NextResponse.json({ mensagem: 'An unknown error occurred' }, { status: 500 });
  }
}

//################################
export { controleLivro};
