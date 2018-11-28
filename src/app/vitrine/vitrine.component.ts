import { Component, OnInit } from '@angular/core';
import { Produto } from './../generics/produto.model';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.scss']
})
export class VitrineComponent implements OnInit {

  public produtos: Produto[];

  constructor() { }

  ngOnInit() {
    this.produtos = [
      {id: 1, codigo: 1, descricao: 'Camiseta Mescla gola V'
      , descricao_seo: null, preco_de_b2b: 0, preco_por_b2c: 0
      , preco_por_b2b: 0, preco_de_b2c: 0, fotos: null, tamanhos: null},
      {id: 2, codigo: 2, descricao: 'Camiseta Preta gola V'
      , descricao_seo: null, preco_de_b2b: 0, preco_por_b2c: 0
      , preco_por_b2b: 0, preco_de_b2c: 0, fotos: null, tamanhos: null},
      {id: 3, codigo: 3, descricao: 'Camiseta Azul gola V'
      , descricao_seo: null, preco_de_b2b: 0, preco_por_b2c: 0
      , preco_por_b2b: 0, preco_de_b2c: 0, fotos: null, tamanhos: null},
      {id: 3, codigo: 3, descricao: 'Camiseta Azul gola V'
      , descricao_seo: null, preco_de_b2b: 0, preco_por_b2c: 0
      , preco_por_b2b: 0, preco_de_b2c: 0, fotos: null, tamanhos: null}
      ,
      {id: 3, codigo: 3, descricao: 'Camiseta Azul gola V'
      , descricao_seo: null, preco_de_b2b: 0, preco_por_b2c: 0
      , preco_por_b2b: 0, preco_de_b2c: 0, fotos: null, tamanhos: null}
      ,
      {id: 3, codigo: 3, descricao: 'Camiseta Azul gola V'
      , descricao_seo: null, preco_de_b2b: 0, preco_por_b2c: 0
      , preco_por_b2b: 0, preco_de_b2c: 0, fotos: null, tamanhos: null},
      {id: 3, codigo: 3, descricao: 'Camiseta Azul gola V'
      , descricao_seo: null, preco_de_b2b: 0, preco_por_b2c: 0
      , preco_por_b2b: 0, preco_de_b2c: 0, fotos: null, tamanhos: null}

    ];
  }
}
