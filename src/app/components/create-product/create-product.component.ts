import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Http } from '@angular/http';
import { Products } from '../products';
import { Router } from '@angular/router';
import { AddProduct } from '../addproduct';
import { FlashMessagesService } from 'ngx-flash-messages';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  products: Products;
  addproduct = new AddProduct();

  constructor(private productService: ProductsService,
  private http: Http, private router: Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  AddProduct() {
    this.productService.AddingProducts(this.addproduct).subscribe(res => console.log(res));
    this.router.navigate(['/products']);
    this.flashMessage.show('Produktot beshe uspeshno dodaden', {
      classes: ['alert alert-success'],
      timeout: 3000,
    });
  }

}
