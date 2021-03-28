import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Book} from '../../models';
import {ServiceBooksService} from '../../service-books.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  form: FormGroup;
  constructor(
    private serviceBook: ServiceBooksService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required)
    });
  }

  submit(): void {
    if (this.form.invalid){
      console.log('invalid', this.form);
      return;
    }
    const book: Book = {
      title: this.form.value.title,
      author: this.form.value.author,
      quantity: this.form.value.quantity,
      id: String(new Date().getTime()) // для простоты - метка времени = id
    };
    // отправить данные через сервис в базу данных
    console.log('send');
    this.serviceBook.adBookToBase(book);
    // сделать редирект на страницу со списком
    this.router.navigate(['']);
  }
}
