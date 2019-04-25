import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular'; //Componentes de ionic content, header,..
import { CommonModule } from '@angular/common';
import { FruitCardComponent } from './fruit-card/fruit-card.component';

@NgModule({
  declarations: [
    FruitCardComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    FruitCardComponent,
  ]
})
export class ComponentsModule { }
