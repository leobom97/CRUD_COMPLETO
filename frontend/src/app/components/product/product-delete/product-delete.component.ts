import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/shared/Models/Product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product =>{
      this.product = product
    })
  }

  deletarProduto(){
    this.productService.deleteProduct(this.product.id).subscribe(()=>{
      window.confirm("Deseja realmente Excluir o produto?")
      this.productService.showMessage('Produto Excluído com Sucesso!!!')
      this.router.navigate(['/products'])
    })
  }

  cancelarExclusao(){
    this.router.navigate(['/products'])
  }

}
