import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { BooksComponent } from './pages/books/books.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  // {path: 'books', component: BooksComponent}, Lo quitamos para hacer lazyloading
  {path: 'books', loadChildren: './pages/books/books.module#BooksModule'},
  {path: 'books/:index', loadChildren: './pages/book-details/book-details.module#BookDetailsModule'},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
