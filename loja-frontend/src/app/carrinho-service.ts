import { computed, inject, Injectable, Service, signal } from '@angular/core';
import { ItemCarrinho, Produto } from './produto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor() {
    console.log("CarrinhoService criado");
  }

  readonly API = 'http://localhost:3000';
  readonly #http = inject(HttpClient);
  private itens = signal<ItemCarrinho[]>([]);
  private total = signal<number>(0);



  adicionarItem(produto: Produto) {
    for (let i = 0; i < this.itens().length; i++) {
      if (produto.id === this.itens()[i].produto.id) {
        this.itens.update((itens) => {
          itens[i] = {
            ...itens[i],
            quantidade: itens[i].quantidade + 1,
          };

          return [...itens];
        });

        return;
      }
    }

    this.itens.update((itens) => [
      ...itens,
      {
        produto: produto,
        quantidade: 1,
      },
    ]);

    this.atualizarTotal();
    console.log("ITENS DENTRO DO SERVICE:", this.itens());
  }

  aumentarQuantidade(id: number) {
    this.itens.update((itens) =>
      itens.map((item) =>
        item.produto.id === id
          ? {
              ...item,
              quantidade: item.quantidade + 1,
            }
          : item,
      ),
    );
  }

  diminuirQuantidade(id: number) {
    this.itens.update((itens) =>
      itens.map((item) =>
        item.produto.id === id
          ? {
              ...item,
              quantidade: Math.max(1, item.quantidade - 1),
            }
          : item,
      ),
    );
  }

  obterTodos() {
    console.log("OBTENDO ITENS:", this.itens());
    return this.itens.asReadonly();
  }

  removerItem(id: number) {
    this.itens.update((itens) => itens.filter((item) => item.produto.id !== id));
  }

  atualizarTotal() {
    const total = this.itens().reduce(
      (soma, item) => soma + item.produto.preco * item.quantidade,
      0,
    );

    this.total.set(Number(total.toFixed(2)));

    return total;
  }

  obterTotal() {
    return this.total.asReadonly();
  }
}
