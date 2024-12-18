import { Produto } from './../produto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  @Input() produto: Produto = {
    nome: '',
    preco: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
