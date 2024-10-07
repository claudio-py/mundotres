import { NextResponse} from 'next/server';
import {controleEditora} from '../route'
export async function GET(request: Request, context: any){
  const {params} = context;
  const editoras = controleEditora.getNomeEditora(params.codEditora);
  return NextResponse.json(editoras);

}
