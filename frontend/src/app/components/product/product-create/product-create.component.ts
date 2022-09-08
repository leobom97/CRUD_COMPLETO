import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/Models/Product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: 0
  }
  
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  criarProduto(){
    this.productService.createProduct(this.product).subscribe(() =>{
      this.productService.showMessage('Produto Registrado!!!')
      this.router.navigate(['/products'])
    })
  }

  cancelarRegistro(){
    this.router.navigate(['/products'])
  }

}
