import ControleEditora from '../../controle/ControleEditora';
const controleEditora = new ControleEditora();
import { NextResponse} from 'next/server';
export async function GET(){
  return NextResponse.json(controleEditora.getEditoras())
}
export { controleEditora };
