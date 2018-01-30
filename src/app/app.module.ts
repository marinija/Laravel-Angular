// Angulars Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// Services
import { ProductsService } from './services/products.service';
import { OneProductComponent } from './components/one-product/one-product.component';

// Flash message
import { FlashMessagesModule } from 'ngx-flash-messages';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'create-product', component: CreateProductComponent},
  {path: 'products/:id', component: OneProductComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    CreateProductComponent,
    OneProductComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FlashMessagesModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
