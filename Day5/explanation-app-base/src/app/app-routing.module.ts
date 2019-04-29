import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'template-driven-form',
    loadChildren: './pages/template-driven-form/template-driven-form.module#TemplateDrivenFormPageModule'
  },
  {
    path: 'reactive-form',
    loadChildren: './pages/reactive-form/reactive-form.module#ReactiveFormPageModule'
  },
  { path: 'fruitslist', loadChildren: './pages/fruitslist/fruitslist.module#FruitslistPageModule' },
  { path: 'fruitslist/:index', loadChildren: './pages/detail/detail.module#DetailPageModule' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
