import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { DetailComponent } from './components/books/detail/detail.component';
import { AddComponent } from './components/books/add/add.component';
import { EditComponent } from './components/books/edit/edit.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    data: { title: 'List of books.' }
  },
  {
    path: 'books/detail/:id',
    component: DetailComponent,
    data: { title: 'Book detail.' }
  },
  {
    path: 'books/add',
    component: AddComponent,
    data: { title: 'Add a book.' }
  },
  {
    path: 'books/edit/:id',
    component: EditComponent,
    data: { title: 'Edit a book.' }
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
