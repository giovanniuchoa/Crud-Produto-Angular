import { Component, OnInit } from '@angular/core';
import { Produto } from '../listagem/produto';
import { ProdutoService } from '../listagem/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-produto',
  templateUrl: './excluir-produto.component.html',
  styleUrls: ['./excluir-produto.component.css']
})
export class ExcluirProdutoComponent implements OnInit {

  produto: Produto = {
    id: 0,
    nome: '',
    preco: ''
  }

  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((produto) => {
      this.produto = produto
    })
  }

  excluirProduto() {
    if (this.produto.id) {
      this.service.excluir(this.produto.id).subscribe(() => {
        this.router.navigate(['/produtos'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/produtos'])
  }

}
