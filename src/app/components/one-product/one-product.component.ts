import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Products } from '../products';
import { AddProduct } from '../addproduct';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {

  products: AddProduct;
  constructor(private activatedRoute: ActivatedRoute,
  private router: Router,
  private productsService: ProductsService,
  private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.GetOneProduct();
  }

  GetOneProduct() {
    const id = this.activatedRoute.snapshot.params['id'];

    this.productsService.ShowOneProduct(id)
      .subscribe(products => {
        this.products = products[0];
        this.products.id = id;
      });
  }

  UpdateProfile() {
    this.productsService.EditProduct(this.products)
      .subscribe(response => console.log(response));
      this.router.navigate(['/products']);
      this.flashMessage.show('Produktot beshe uspeshno izmenet', {
        classes: ['alert alert-success'],
        timeout: 3000,
      });
  }

}
