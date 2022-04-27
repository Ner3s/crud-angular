import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct, TProductParams } from 'src/app/shared/models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(data?: TProductParams): Observable<IProduct[]> {
    const params = {
      _page: data?._page ?? 1,
      _limit: data?._limit ?? 8,
      ...(data?.name && { name: data.name })
    }

    return this.http.get<IProduct[]>(`${environment.api}/products`, {
      params,
    });
  }

  getById(id: number | string): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.api}/products/${id}`);
  }

  update(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${environment.api}/products/${product.id}`, product);
  }

  delete(id: number | string): Observable<void> {
    return this.http.delete<void>(`${environment.api}/products/${id}`);
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${environment.api}/products`, product);
  }
}
