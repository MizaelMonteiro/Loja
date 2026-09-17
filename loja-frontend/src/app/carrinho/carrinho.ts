import { Component, inject, input, signal } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos-service';
import { CarrinhoService } from '../carrinho-service';

@Component({
  imports: [],
  selector: 'app-carrinho',
  styleUrl: './carrinho.scss',
  templateUrl: './carrinho.html',
})
export class Carrinho {
  readonly #carrinhoService = inject(CarrinhoService);
  protected itens = this.#carrinhoService.obterTodos();

  aumentar(id:number){
    this.#carrinhoService.aumentarQuantidade(id)
    

  }
  diminuir(id:number){
    this.#carrinhoService.diminuirQuantidade(id)

  }
}

  

