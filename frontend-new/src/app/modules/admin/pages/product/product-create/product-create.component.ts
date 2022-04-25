import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    name: ['Alan', [Validators.required, Validators.minLength(3)]]
  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.form.controls['name'].errors)
  }

  onSubmit(): void{
    console.log(this.form.valid)
  }

}
