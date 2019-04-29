import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; //Componentes de ionic content, header,..
import { LoadingFeedbackComponent } from './loading-feedback/loading-feedback.component';

@NgModule({
  declarations: [LoadingFeedbackComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [LoadingFeedbackComponent,]
})
export class ComponentsModule { }
