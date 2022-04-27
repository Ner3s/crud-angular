import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidations } from '../../utils/form-validations';

@Component({
  selector: 'app-form-error-msg',
  templateUrl: './form-error-msg.component.html',
  styleUrls: ['./form-error-msg.component.scss'],
})
export class FormErrorMsgComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label!: string;

  constructor() {}

  ngOnInit(): void {}

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      console.log(this.control);
      if (
        this.control.errors[propertyName] &&
        this.control.touched || this.control.dirty
      ) {
        return FormValidations.getErrorMessage(
          this.label,
          propertyName,
          this.control.errors[propertyName]
        );
      }
    }

    return null;
  }
}
