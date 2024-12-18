import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../listagem/produto.service';
import { Produto } from '../listagem/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent implements OnInit {

  produto: Produto = {
    nome: '',
    preco: ''
  }

  constructor(
    private service: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarProduto() {
    this.service.criar(this.produto).subscribe(() => {
      this.router.navigate(['/produtos'])
    })
  }

}
