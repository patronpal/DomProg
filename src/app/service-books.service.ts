import {Injectable} from '@angular/core';
import {Book} from './models';

@Injectable({
  providedIn: 'root'
})
export class ServiceBooksService {
  constructor() {
  }

  adBookToBase(book: Book): void {
    const nArray = JSON.parse(localStorage.getItem('book'));
    nArray.push(book);
    localStorage.setItem('book', JSON.stringify(nArray));
  }

  deleteBookInBase(id: string): void {
    const filteredArray = JSON.parse(localStorage.getItem('book')).filter(trArray => trArray.id !== id);
    localStorage.setItem('book', JSON.stringify(filteredArray));
  }

  getAllBooks(): Book[] {
    return JSON.parse(localStorage.getItem('book'));
  }

  getBook(param: string): Book{
    const filteredArray = JSON.parse(localStorage.getItem('book')).filter(trArray => trArray.id === param);
    return filteredArray[0];
  }

  editBookToBase(book: Book): void {
    const filteredArray = JSON.parse(localStorage.getItem('book')).filter(trArray => trArray.id !== book.id);
    filteredArray.push(book);
    localStorage.setItem('book', JSON.stringify(filteredArray));
  }
}

