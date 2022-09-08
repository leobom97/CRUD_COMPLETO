import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/Models/Product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product =>{
      this.product = product
    });
  }

  alterarProduto(){
      this.productService.updateProduct(this.product).subscribe(() => {
        this.productService.showMessage('Produto Atualizado com Sucesso!!!')
        this.router.navigate(['/products'])
      })
  }


  cancelarAlteracao(){
    this.router.navigate(['/products'])
  }

}
