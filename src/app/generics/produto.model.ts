
import { Foto } from './foto.model';
import { Tamanho } from './tamanho.model';

export class Produto {

    constructor(
        public id: number,
        public codigo: number,
        public descricao: string,
        public descricao_seo: string,
        public preco_de_b2c: number,
        public preco_de_b2b: number,
        public preco_por_b2c: number,
        public preco_por_b2b: number,
        public fotos: Foto[],
        public tamanhos: Tamanho[]
    ) {}
}
