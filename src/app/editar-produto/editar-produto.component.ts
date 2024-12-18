import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../listagem/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../listagem/produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

    produto: Produto = {
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

  editarProduto() {
    this.service.editar(this.produto).subscribe(() => {
      this.router.navigate(['/produtos'])
    })
  }

  cancelar() {
    this.router.navigate(['/produtos'])
  }

}
