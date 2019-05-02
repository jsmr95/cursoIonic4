import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular'; //Componentes de ionic content, header,..
import { CommonModule } from '@angular/common';
import { ExpandableContentComponent } from './expandable-content/expandable-content.component';
import { RatingComponent } from './rating/rating.component';
import { FruitCardComponent } from './fruit-card/fruit-card.component';


@NgModule({
  declarations: [
    ExpandableContentComponent,
    FruitCardComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    ExpandableContentComponent,
    FruitCardComponent,
    RatingComponent
  ]
})
export class ComponentsModule { }
