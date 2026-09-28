import { Component, inject, signal } from '@angular/core';
import { ProdutosService } from '../produtos-service';
import { Produto } from '../produto';
import { CarrinhoService } from '../carrinho-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-exibir-produtos',
  styleUrl: './exibir-produtos.scss',
  templateUrl: './exibir-produtos.html',
})
export class ExibirProdutos {
  readonly #produtosService = inject(ProdutosService);
  readonly #carrinhoService = inject(CarrinhoService);

  protected produtos = signal<Produto[]>([]);
  protected itens = signal<Produto[]>([]);

  constructor() {
    this.#produtosService.obterTodos().subscribe((res) => {
      console.log(res);
      this.produtos.set(res);
    });
  }

  addItem(id:number) {
    
    
    this.#produtosService.obterProdutoPorId(id).subscribe((res) => {
      this.#carrinhoService.adicionarItem(res)
      this.#carrinhoService.atualizarTotal()
      console.log("total no ao clicar no botao comp", this.#carrinhoService.obterTotal())
    });
    
    
  }
}
