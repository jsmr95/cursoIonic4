import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; //Componentes de ionic content, header,..
import { LoadingFeedbackComponent } from './loading-feedback/loading-feedback.component';
import { ExpandableContentComponent } from './expandable-content/expandable-content.component';
import { FruitCardComponent } from './fruit-card/fruit-card.component';


@NgModule({
  declarations: [
    LoadingFeedbackComponent,
    ExpandableContentComponent,
    FruitCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LoadingFeedbackComponent,
    ExpandableContentComponent,
    FruitCardComponent
  ]
})
export class ComponentsModule { }
