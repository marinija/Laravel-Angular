import { Component, OnInit } from '@angular/core';
// import { ProductsService } from '../../services/products.service';
import { Http } from '@angular/http';
import { Products } from '../products';
import { ProductsService } from '../../services/products.service';
import {Observable} from 'rxjs/observable';
import { AddProduct } from '../addproduct';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Observable<Products[]>;
  deleteProducts: AddProduct;

  constructor(private http: Http,
     private productService: ProductsService,
     private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.GetProducts()
      .subscribe(response => this.products = response);
  }

  DeleteProduct(id) {
    const response = confirm('Are you sure you want to delete this product');
    if (response) {
      this.productService.deleteProduct(id)
        .subscribe(res => {
          console.log(res);
          this.getProducts();
          this.flashMessage.show('Produktot beshe uspeshno izbrishan', {
            classes: ['alert alert-danger'],
            timeout: 3000,
          });
        });
    } else {
      console.log('nishto ne e izbrishano');
    }
  }
}
