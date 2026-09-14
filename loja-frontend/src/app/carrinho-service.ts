import { inject, Service, signal } from '@angular/core';
import { Produto } from './produto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Service()
export class CarrinhoService {

    readonly API = 'http://localhost:3000';
    readonly #http = inject(HttpClient);
    
    
    addItem(id:number):Observable<Produto[]> {
        return this.#http.get<Produto[]>(
         `${this.API}/produtos/${id}`
        );
    }

}
