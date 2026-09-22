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
  protected total = this.#carrinhoService.obterTotal();



  aumentar(id:number){
    this.#carrinhoService.aumentarQuantidade(id)
    this.#carrinhoService.atualizarTotal()


    

  }
  diminuir(id:number){
    this.#carrinhoService.diminuirQuantidade(id)
    this.#carrinhoService.atualizarTotal()

  }
  remover(id:number){
    this.#carrinhoService.removerItem(id)
    this.#carrinhoService.atualizarTotal()
  }




    
}

  

