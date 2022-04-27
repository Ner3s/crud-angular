import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/core/services/common/common.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalConfirmComponent } from 'src/app/shared/components/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
    description: [null, [Validators.required, Validators.minLength(3)]],
    price: [null, [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private commonService: CommonService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log(this.form.controls['name'].errors);
  }

  onSubmit(): void {
    const formSubmitSubscribe = {
      next: () => {
        this.commonService.showMessage('Produto criado com sucesso.');
        this.dialog.open(ModalConfirmComponent, {
          data: {
            title: 'Produto criado com sucesso!',
            apperanceButtonConfirm: 'blue',
            description:
              'Deseja criar outro produto? ou retornar para a tela anterior.',
            handleSubmit: () => {
              this.form.reset();
            },
            handleClose: () => {
              this.handleBackPage();
            },
          },
        });
      },
      error: () => {
        this.commonService.showMessage('Não foi possível criar produto.');
      },
    };

    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.productService
        .create(this.form.value)
        .subscribe(formSubmitSubscribe);
    }
  }

  handleBackPage() {
    this.router.navigate(['/products']);
  }
}
