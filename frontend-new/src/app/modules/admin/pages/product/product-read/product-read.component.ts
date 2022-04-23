import { CommonService } from 'src/app/core/services/common/common.service';
import { Product, TProductParams } from './../../../../../shared/models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  isLoading = false;
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.handleGetAllProducts();
  }

  async handleGetAllProducts(params?: TProductParams) {
    this.productService.getAll(params).subscribe({
      next(value) {
        console.log(value)
      },
    });

  }

}
