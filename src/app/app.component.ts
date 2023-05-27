import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Library-App';
  authorData: string[] = [];

  updateAuthors(authors: string[]) {
    this.authorData = authors.slice();
  }
}
