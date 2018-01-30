import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,  } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductsService {

  // local laravel server
  server = 'http://localhost/';

  headers: Headers = new Headers();
  options: any;

  constructor(private http: Http) {
    this.headers.append('enctype', 'multypart/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');
    this.options = new  RequestOptions({headers: this.headers});
  }

  AddingProducts(info) {
    const data = JSON.stringify(info);
    return this.http.post(this.server + 'addproduct', data, this.options).map(
      res => res.json()
    );
  }

  GetProducts() {
    return this.http.get(this.server + 'products').map(res => res.json());
  }

  ShowOneProduct(id) {
    return this.http.get(this.server + 'products/' + id)
      .map(res => res.json());
  }

  EditProduct(info) {
    const data = JSON.stringify(info);
    return this.http.post(this.server + 'editproduct', data, this.options)
      .map(res => res.json());
  }

  deleteProduct(id) {
    return this.http.get(this.server + 'deleteproduct/' + id)
      .map(res => res.json());
  }
}
