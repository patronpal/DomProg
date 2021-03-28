import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { BookComponent } from './components/book/book.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeBooksComponent } from './components/home-books/home-books.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    BookComponent,
    HomeBooksComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
