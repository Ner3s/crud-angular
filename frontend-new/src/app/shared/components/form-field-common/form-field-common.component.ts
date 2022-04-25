import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormValidations } from '../../utils/form-validations';

const FORM_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormFieldCommonComponent),
  multi: true,
};

@Component({
  selector: 'app-form-field-common',
  templateUrl: './form-field-common.component.html',
  styleUrls: ['./form-field-common.component.scss'],
  providers: FORM_FIELD_VALUE_ACCESSOR,
})
export class FormFieldCommonComponent implements ControlValueAccessor {
  @Input() classCss: any;
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() name!: string;
  @Input() placeholder: string = '';
  @Input() type = 'text';
  @Input() control: any;
  @Input() isReadOnly = false;

  private innerValue: any;

  public get value() {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.value) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  onChangeCallback = (_: any) => {};
  onTouchedCallback = (_: any) => {};

  writeValue(v: any): void {
    this.value = v;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (
        (this.control.errors[propertyName] && this.control.touched) ||
        this.control.invalid
      ) {
        return FormValidations.getErrorMessage(
          this.label,
          propertyName,
          this.control.errors[propertyName]
        );
      }

      return '';
    }
  }
}
