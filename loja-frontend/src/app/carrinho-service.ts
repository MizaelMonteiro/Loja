import { inject, Service, signal } from '@angular/core';
import { ItemCarrinho, Produto } from './produto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Service()
export class CarrinhoService {
  obterItens() {
    throw new Error("Method not implemented.");
  }
  readonly API = 'http://localhost:3000';
  readonly #http = inject(HttpClient);
 private itens = signal<ItemCarrinho[]>([]);

adicionarItem(produto: Produto) {
  for (let i = 0; i < this.itens().length; i++) {

    if (produto.id === this.itens()[i].produto.id) {

      this.itens.update(itens => {
        itens[i] = {
          ...itens[i],
          quantidade: itens[i].quantidade + 1
        };

        return [...itens];
      });

      return;
    }
  }

  this.itens.update(itens => [
    ...itens,
    {
      produto: produto,
      quantidade: 1
    }
  ]);
}

aumentarQuantidade(id: number) {
  this.itens.update(itens =>
    itens.map(item =>
      item.produto.id === id
        ? {
            ...item,
            quantidade: item.quantidade + 1
          }
        : item
    )
  );
}

diminuirQuantidade(id: number) {
  this.itens.update(itens =>
    itens.map(item =>
      item.produto.id === id
        ? {
            ...item,
            quantidade: Math.max(1, item.quantidade - 1)
          }
        : item
    )
  );
}

  obterTodos() {
    return this.itens.asReadonly();
  }
}
