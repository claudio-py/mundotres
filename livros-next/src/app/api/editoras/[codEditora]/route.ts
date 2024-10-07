import { NextResponse } from 'next/server';
import { controleEditora } from '../route';
import { NextRequest } from 'next/server';

interface Context {
  params: {
    codEditora: string;
  };
}

export async function GET(context: Context) {
  const { params } = context;
  const codEditora = parseInt(params.codEditora, 10);
  const editoras = controleEditora.getNomeEditora(codEditora);
  return NextResponse.json(editoras);
}
