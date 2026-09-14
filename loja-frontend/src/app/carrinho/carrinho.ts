import { Component, inject, input, signal } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos-service';

@Component({
  imports: [],
  selector: 'app-carrinho',
  styleUrl: './carrinho.scss',
  templateUrl: './carrinho.html',
})
export class Carrinho {
  protected itens = 
    signal<Produto[]>([])
  id = input<number>();

  protected produtos = 
    signal<Produto[]>([])

  readonly #produtosService = inject(ProdutosService)

  constructor() {
    this.#produtosService.obterTodos().subscribe(
      res => {
        console.log(res);
        this.produtos.set(res);
      })
      console.log(this.id());
  }

  addItem(produto: Produto) {
    this.#produtosService.obterProdutoPorId(this.id()!).subscribe(
      res => {
        console.log(res);
        this.itens.update(itens => [...itens, res]);
      })
    };
  
}
