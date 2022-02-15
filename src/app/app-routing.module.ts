import { BookShopComponent } from './../components/book-shop/book-shop.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './../components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:"Login",component:LoginComponent},
{path:"shop",component:BookShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
