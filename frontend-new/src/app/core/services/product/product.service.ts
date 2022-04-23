import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, TProductParams } from 'src/app/shared/models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll({ _page, _limit, name }: TProductParams): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.api}/products`, {
      params: {
        name,
        _page: _page ?? 1,
        _limit: _limit ?? 8
      }
    });
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.api}/products/${id}`);
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${environment.api}/products/${product.id}`, product);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api}/products/${id}`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.api}/products`, product);
  }
}
