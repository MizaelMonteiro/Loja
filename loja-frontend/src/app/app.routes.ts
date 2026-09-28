import { Routes } from '@angular/router';
import { ExibirProdutos } from './exibir-produtos/exibir-produtos';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';
import { Carrinho } from './carrinho/carrinho';

export const routes: Routes = [
  { path: 'produtos', component: ExibirProdutos },
  {path: '', redirectTo: '/produtos', pathMatch: 'full' },
  { path: 'produtos/:id', component: ProdutoDetalhe },
  { path: 'carrinho', component: Carrinho }
];
