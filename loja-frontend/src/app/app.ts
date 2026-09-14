import { Component, signal } from '@angular/core';
import { ExibirProdutos } from './exibir-produtos/exibir-produtos';
import { RouterOutlet } from '@angular/router';
import { Carrinho } from './carrinho/carrinho';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Carrinho],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('loja-frontend');
}
