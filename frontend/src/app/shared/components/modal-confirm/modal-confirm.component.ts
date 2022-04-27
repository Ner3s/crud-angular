import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IModalConfirmData {
  title: string;
  description: string;
  apperanceButtonConfirm?: 'blue' | 'red';
  handleSubmit: () => void;
  handleClose?: () => void;
}

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IModalConfirmData) { }

  ngOnInit(): void {
  }

}
