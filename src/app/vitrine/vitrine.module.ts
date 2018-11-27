import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VitrineComponent } from './vitrine.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    VitrineComponent
  ],
  declarations: [VitrineComponent, ProdutoComponent]
})
export class VitrineModule { }
