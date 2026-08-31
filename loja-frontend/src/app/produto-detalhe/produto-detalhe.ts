import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ProdutosService } from '../produtos-service';
import { Produto } from '../produto';

@Component({
  imports: [],
  selector: 'app-produto-detalhe',
  styleUrl: './produto-detalhe.scss',
  templateUrl: './produto-detalhe.html',
})
export class ProdutoDetalhe implements OnInit {
  readonly #produtosService = inject(ProdutosService)
  protected produtos = 
    signal<Produto[]>([])


  
  id = input<number>();
  ngOnInit() {
     this.#produtosService.obterProdutoPorId(this.id()!).subscribe(
      res => {
        console.log(res);
        this.produtos.set([res]);
      })
    }
}


