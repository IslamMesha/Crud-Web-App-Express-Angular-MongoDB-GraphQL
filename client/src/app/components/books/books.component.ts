import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Book } from './classes/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  displayedColumns: string[] = ['title', 'author', 'description', 'publisher', 'updated_date'];
  books: Book[] = [];
  response: any = {};
  isLoadingResults = true;

  constructor(
    private apollo: Apollo
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.apollo.query({
      query: gql`{ books { _id, title, author, description, publisher, updated_date} }`
    }).subscribe(res => {
      this.response = res;
      this.books = this.response.data.books;
      console.log(this.books);
      this.isLoadingResults = false;
    });
  }

}
