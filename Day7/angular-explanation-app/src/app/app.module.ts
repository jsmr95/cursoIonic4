import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
// import { BookDetailsComponent } from './pages/book-details/book-details.component';
// import { BooksComponent } from './pages/books/books.component'; Lo comento para hacer lazyloading

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // BookDetailsComponent,
    // BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
