import { Component, signal } from '@angular/core';
import { ExibirProdutos } from './exibir-produtos/exibir-produtos';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('loja-frontend');
}
