
import { Component, inject, signal } from '@angular/core';
import { ProdutosService } from '../produtos-service';
import { Produto } from '../produto';


@Component({
  imports: [],
  selector: 'app-exibir-produtos',
  styleUrl: './exibir-produtos.scss',
  templateUrl: './exibir-produtos.html',
})

export class ExibirProdutos {
  readonly #produtosService = inject(ProdutosService)
  protected produtos = 
    signal<Produto[]>([])

  constructor() {
    this.#produtosService.obterTodos().subscribe(
      res => {
        console.log(res);
        this.produtos.set(res);
      })
  }
}




