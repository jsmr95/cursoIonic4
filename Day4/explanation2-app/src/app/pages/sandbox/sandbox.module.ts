import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SandboxPage } from './sandbox.page';
import { ExpandableContentComponent } from '../../components/expandable-content/expandable-content.component';
import { RatingComponent } from '../../components/rating/rating.component';

const routes: Routes = [
  {
    path: '',
    component: SandboxPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SandboxPage,
    ExpandableContentComponent,
    RatingComponent,
  ]
})
export class SandboxPageModule {}
