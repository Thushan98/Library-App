import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {
    console.log("service: ", this.authorsDetails)
  }
  private authorsDetails: string[] = [];

  getAuthors(): string[] {
    return this.authorsDetails;
  }

  addAuthor(author: any): void {
    this.authorsDetails.push(author);
  }

  deleteAuthor(index:any):void{
    this.authorsDetails.splice(index, 1);
  }
}
