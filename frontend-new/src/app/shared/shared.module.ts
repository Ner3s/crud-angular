// Material
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

//  Commons
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { FormErrorMsgComponent } from './components/form-error-msg/form-error-msg.component';
import { FormFieldCommonComponent } from './components/form-field-common/form-field-common.component';

const MaterialModules = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatSnackBarModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatInputModule,
];

const ComponentsShared = [
  ModalConfirmComponent,
  FormFieldComponent,
  FormFieldCommonComponent,
  FormErrorMsgComponent,
];

@NgModule({
  declarations: [...ComponentsShared],
  imports: [CommonModule, FormsModule, ...MaterialModules],
  exports: [...MaterialModules, ...ComponentsShared, FormsModule],
})
export class SharedModule {}
