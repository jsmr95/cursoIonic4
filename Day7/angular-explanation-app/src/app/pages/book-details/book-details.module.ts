import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [BookDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BookDetailsComponent
      }
    ])
  ]
})
export class BookDetailsModule { }
