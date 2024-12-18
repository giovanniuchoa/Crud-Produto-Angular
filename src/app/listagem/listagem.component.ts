import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  listaProdutos: Produto[] = [];

  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaProdutos) => {
      this.listaProdutos = listaProdutos
    })
  }

}
