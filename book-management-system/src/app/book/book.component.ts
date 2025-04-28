import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [FormsModule, CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {
  title: string = '';
  author = '';

  books: Book[] = [];

  ngOnInit(): void {
    let saveBooks = localStorage.getItem('books');

    this.books = saveBooks ? JSON.parse(saveBooks) : [];
  }

  addBook() {
    if (this.title.trim().length && this.author.trim().length) {
      let newBook: Book = {
        id: Date.now(),
        title: this.title,
        author: this.author,
      };

      this.books.push(newBook);
      this.title = '';
      this.author = '';

      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }

  deleteBook(index: number) {
    if (this.books.length > 0 && index >= 0) {

      this.books.splice(index,1);
      localStorage.setItem('books',JSON.stringify(this.books))
    }
  }
}
