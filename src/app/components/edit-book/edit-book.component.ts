import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceBooksService} from '../../service-books.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Book} from '../../models';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  bookParams: Book;
  form: FormGroup;
  bookId: string;

  constructor(
    private serviceBook: ServiceBooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.bookParams = this.serviceBook.getBook(params['id']);
      this.bookId = params['id'];
      this.form = new FormGroup({
        title: new FormControl(this.bookParams.title, Validators.required),
        author: new FormControl(this.bookParams.author, Validators.required),
        quantity: new FormControl(this.bookParams.quantity, Validators.required)
      });
    });
  }

  submit(): void {
    if (this.form.invalid) {
      console.log('invalid', this.form);
      return;
    }
    const book: Book = {
      title: this.form.value.title,
      author: this.form.value.author,
      quantity: this.form.value.quantity,
      id: this.bookId
    };
    // отправить данные через сервис в базу данных
    console.log('sendWithId');
    this.serviceBook.editBookToBase(book);
    // сделать редирект на страницу со списком
    this.router.navigate(['']);
  }

}
