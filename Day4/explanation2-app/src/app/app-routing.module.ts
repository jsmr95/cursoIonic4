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
    path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule'
  },
  { path: 'details/:index', loadChildren: './pages/details/details.module#DetailsPageModule' },
  { path: 'sandbox', loadChildren: './pages/sandbox/sandbox.module#SandboxPageModule' },
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
