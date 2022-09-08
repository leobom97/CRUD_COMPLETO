import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Product } from '../Models/Product.model';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { flatten } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  createProduct(product:Product): Observable<Product>{
    return this.http.post<Product>(`${API_PATH}`, product)
  }

  readProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_PATH}`)
  }

  readById(id: number): Observable<Product> {
    const _url = `${API_PATH}/${id}`
    return this.http.get<Product>(_url)
  }

  updateProduct(product: Product): Observable<Product>{
    const _url = `${API_PATH}/${product.id}`
    return this.http.put<Product>(_url, product)
  }

  deleteProduct(id: number): Observable<Product> {
    const _url = `${API_PATH}/${id}`
    return this.http.delete<Product>(_url)
  }

}
