import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteComponent } from './componente/componente.component';
import { ListagemComponent } from './listagem/listagem.component';
import { ExcluirProdutoComponent } from './excluir-produto/excluir-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'produtos',
    pathMatch: 'full'
  },
  {
    path: 'componente',
    component: ComponenteComponent
  },
  {
    path: 'produtos',
    component: ListagemComponent
  },
  {
    path: 'produtos/excluirProduto/:id',
    component: ExcluirProdutoComponent
  },
  {
    path: 'produtos/editarProduto/:id',
    component: EditarProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
