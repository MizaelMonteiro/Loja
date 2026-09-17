

export interface Produto {
  id: number;
  nome: string;
  marca: string;
  descricao: string;
  preco: number;
  foto: string;
  quantidade: number;
}

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}