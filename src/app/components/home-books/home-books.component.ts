import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ServiceBooksService} from '../../service-books.service';
import {Book} from '../../models';

@Component({
  selector: 'app-home-books',
  templateUrl: './home-books.component.html',
  styleUrls: ['./home-books.component.css']
})
export class HomeBooksComponent implements OnInit {
  allBooks: Book[];

  constructor(
    private router: Router,
    private serviceBook: ServiceBooksService
  ) {
  }

  ngOnInit(): void {
    this.allBooks = this.serviceBook.getAllBooks();
  }

  identify(index, item) {
    return item.id;
  }

  createBookIntoList(): void {
    this.router.navigate(['/book']);
  }

  delBook(id: string): void {
    this.serviceBook.deleteBookInBase(id);
    this.ngOnInit();
  }

}
