import { Component, OnInit, Input } from '@angular/core';
import { Produto } from './../../generics/produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  @Input()
  public id_produto: number;

  constructor(
  ) {}

  ngOnInit() {

  }
}
