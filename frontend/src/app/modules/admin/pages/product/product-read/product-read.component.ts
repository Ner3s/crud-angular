import { CommonService } from 'src/app/core/services/common/common.service';
import {
  IProduct,
  TProductParams,
} from '../../../../../shared/models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product/product.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import {
  IModalConfirmData,
  ModalConfirmComponent,
} from 'src/app/shared/components/modal-confirm/modal-confirm.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss'],
})
export class ProductReadComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'price',
    'actions',
  ];
  products: IProduct[] = [];
  isLoading = false;

  constructor(
    private productService: ProductService,
    private commonService: CommonService,
    public dialog: MatDialog,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.handleGetAllProducts();
  }

  handleGetAllProducts(params?: TProductParams) {
    this.isLoading = true;

    const subsParams = {
      next: (response: IProduct[]) => {
        this.products = response;
      },
      error: (err: Error) => {
        this.commonService.showMessage(
          'Oops, não foi possível buscar os produtos!'
        );
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    };

    this.productService.getAll(params).subscribe(subsParams);
  }

  handleDeleteProduct(id: string | number){
    this.isLoading = true;
    const subsParams = {
      next: () => {
        this.commonService.showMessage(`Produto excluído com sucesso!`);
        this.products = this.products.filter(element => element.id !== id);
      },
      error: (err: Error) => {
        this.commonService.showMessage(
          'Oops, não foi possível deletar o produto!'
        );
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    };

    this.productService.delete(id).subscribe(subsParams);
  }

  handlePageEvent(event: PageEvent) {
    this.handleGetAllProducts({
      _page: event.pageIndex + 1,
      _limit: event.pageSize,
    });
  }

  openDialog(description: string , id: string| number) {

    const dataDialog: IModalConfirmData = {
      title: 'Excluir Produto?',
      description: `Deseja realmente excluir o produto: ${description}.
       Essa ação não poderá ser desfeita!`,
      handleSubmit: () => this.handleDeleteProduct(id),
    };

    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      data: dataDialog,
    });
  }

  handleNewProduct(){
    this.router.navigate(['/products/create'])
  }
}
