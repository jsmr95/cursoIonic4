import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
// { path: 'books/:id', loadChildren: './pages/book-details/books-details.module#BookDetailsModule' },
  { path: 'books', loadChildren: './pages/books-list/books-list.module#BooksListModule' },
  { path: '**', redirectTo: 'home' } // Better to Not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
