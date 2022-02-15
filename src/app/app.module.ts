import { BookShopComponent } from './../components/book-shop/book-shop.component';
import { LoginComponent } from './../components/login/login.component';
import { BookDetailComponent } from './../components/book-detail/book-detail.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorRegisterComponent } from '../components/author-register/author-register.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorRegisterComponent,
    BookDetailComponent,
    LoginComponent,
    BookShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
