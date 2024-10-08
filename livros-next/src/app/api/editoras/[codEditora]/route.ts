import { NextResponse } from 'next/server';
import ControleEditora from '../../../controle/ControleEditora';
const controleEditora = new ControleEditora();
// import controleEditora from '../route';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const codEditora = parseInt(searchParams.get('codEditora') || '0', 10);

  if (isNaN(codEditora) || codEditora <= 0) {
    return NextResponse.json({ mensagem: 'Invalid codEditora' }, { status: 400 });
  }

  try {
    const nomeEditora = controleEditora.getNomeEditora(codEditora);
    return NextResponse.json({ nome: nomeEditora });
  } catch (error) {
    return NextResponse.json({ mensagem: (error as Error).message }, { status: 500 });
  }
}
