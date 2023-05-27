import { ChangeDetectionStrategy, Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BookComponent implements OnInit{
  authors: any;
  createBookForm!: boolean;
  addBookText = true;
  bookData: any[] = [];
  showDiv: boolean = false;
  isEdit = false;
  editIndex = -1;

  constructor(private formBuilder: FormBuilder, private authorService: AuthorService) { }

  ngOnInit() {
    this.authors = this.authorService.getAuthors();
  }

  closeBookForm() {
    this.createBookForm = false;
    this.addBookText = true;
  }

  addBook() {
    this.createBookForm = true;
    this.addBookText = false;
  }

  bookForm = this.formBuilder.group({
    name: ['', Validators.required],
    isbn: [],
    author: ''
  })

  saveBook() {
    if (this.isEdit) {
      this.bookData[this.editIndex] = this.bookForm.value;
      this.isEdit = false;
      this.editIndex = -1;
    } else {
      this.bookData.push(this.bookForm.value);
    }
    this.bookForm.reset();
  }

  updateBook(index: number) {
    this.bookForm.patchValue(this.bookData[index]);
    this.isEdit = true;
    this.editIndex = index;
  }

  removeBook(index: number) {
    this.bookData.splice(index, 1);
  }
}
