import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldCommonComponent } from './form-field-common.component';

describe('FormFieldCommonComponent', () => {
  let component: FormFieldCommonComponent;
  let fixture: ComponentFixture<FormFieldCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
