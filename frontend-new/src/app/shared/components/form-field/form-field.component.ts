import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { FormValidations } from '../../utils/form-validations';

type TAppearance = 'legacy' | 'standard' | 'fill' | 'outline';

const FORM_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => FormFieldComponent),
};

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  providers: [FORM_FIELD_VALUE_ACCESSOR],
})
export class FormFieldComponent implements ControlValueAccessor {
  @Input() appearance: TAppearance = 'legacy';
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

  onChangeCallback: (_: any) => void = () => {};
  onTouchedCallback: (_: any) => void = () => {};

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
      if (this.control.errors[propertyName] && this.control.touched) {
        return FormValidations.getErrorMessage(
          this.label,
          propertyName,
          this.control.errors[propertyName]
        );
      }
      return null;
    }
  }
}
