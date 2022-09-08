import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/Models/Product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  ngOnInit(): void {
    this.productService.readProduct().subscribe(products => {
      this.products = products
      console.log(products)
    })
}

}
