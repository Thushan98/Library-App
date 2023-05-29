import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AuthorComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authorService: AuthorService,
    private snackBar: MatSnackBar
  ) { }

  createAuthorForm!: boolean;
  addAuthorText = true;
  authorData: any[] = [];
  showDiv: boolean = false;
  isEdit = false;
  editIndex = -1;

  closeAuthorForm() {
    this.createAuthorForm = false;
    this.addAuthorText = true;
  }

  addAuthor() {
    this.createAuthorForm = true;
    this.addAuthorText = false;
  }

  authorForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  saveAuthor() {
    if (this.isEdit) {
      this.authorData[this.editIndex] = this.authorForm.value;
      this.isEdit = false;
      this.editIndex = -1;
    } else {
      const auth = this.authorForm.value;
      this.authorData.push(this.authorForm.value);
      this.authorService.addAuthor(this.authorForm.value);
    }
    this.authorForm.reset();
  }

  updateAuthor(index: number) {
    this.authorForm.patchValue(this.authorData[index]);
    this.isEdit = true;
    this.editIndex = index;
  }

  removeAuthor(index: number) {
    this.authorData.splice(index, 1);
    this.authorService.deleteAuthor(index);
  }

  openSnackBar() {
    this.snackBar.open("Author Added Successfully", "", {duration:2000});
  }
}
