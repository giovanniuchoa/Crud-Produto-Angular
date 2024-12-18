import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ComponenteComponent } from './componente/componente.component';
import { ListagemComponent } from './listagem/listagem.component';
import { ProdutoComponent } from './listagem/produto/produto.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExcluirProdutoComponent } from './excluir-produto/excluir-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ComponenteComponent,
    ListagemComponent,
    ProdutoComponent,
    ExcluirProdutoComponent,
    EditarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
