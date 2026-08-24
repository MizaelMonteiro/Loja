import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  readonly API = 'http://localhost:3000';
  readonly #http = inject(HttpClient);

  obterTodos(): Observable<Produto[]> {
    return this.#http.get<Produto[]>(
      `${this.API}/produtos`
    );
  }

  obterProdutosPorNome(nome: string): Observable<Produto[]> {
    return this.#http.get<Produto[]>(
      `${this.API}/produtos?ordem=ASC&ordenarPor=nome&nome=${nome}`
    );
  }
}