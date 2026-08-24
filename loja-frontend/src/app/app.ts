import { Component, signal } from '@angular/core';
import { ExibirProdutos } from "./exibir-produtos/exibir-produtos";

@Component({
  selector: 'app-root',
  imports: [ExibirProdutos],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('loja-frontend');
}
