import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product/product.service';
import { CommonService } from 'src/app/core/services/common/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit {
  isLoading = false;
  id: any;

  form: FormGroup = this.formBuilder.group({
    id: [''],
    name: [null, [Validators.required]],
    description: [null, [Validators.required, Validators.minLength(3)]],
    price: [null, [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.handleGetProduct(this.id);
  }

  onSubmit(): void {
    const formSubmitSubscribe = {
      next: () => {
        this.commonService.showMessage('Produto atualizado com sucesso.');
        this.handleBackPage();
      },
      error: () => {
        this.commonService.showMessage('Não foi possível atualizar produto.');
      },
    };

    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.productService
        .update(this.form.value)
        .subscribe(formSubmitSubscribe);
    }
  }

  handleGetProduct(id: string) {
    this.isLoading = true;
    const formSubmitSubscribe = {
      next: (response: IProduct) => {
        this.form.setValue(response);
        this.isLoading = false;
      },
      error: () => {
        this.commonService.showMessage('Não foi possível buscar produto.');
        this.isLoading = false;
      },
    };

    this.productService.getById(id).subscribe(formSubmitSubscribe);
  }

  handleBackPage() {
    this.router.navigate(['/products']);
  }
}
