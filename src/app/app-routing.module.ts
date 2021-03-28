import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './components/book/book.component';
import {HomeBooksComponent} from './components/home-books/home-books.component';
import {EditBookComponent} from './components/edit-book/edit-book.component';

const routes: Routes = [
  {path: '', component: HomeBooksComponent},
  {path: 'book', component: BookComponent},
  {path: 'editbook/:id', component: EditBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
