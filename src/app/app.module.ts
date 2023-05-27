import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './module/book/book.component';
import { AuthorComponent } from './module/author/author.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthorService } from './services/author.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ErrorValidationComponent } from './components/error-validation/error-validation.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AuthorComponent,
    ErrorValidationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTooltipModule,
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
