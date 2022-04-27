import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/shared/models/menu.model';
import { AdminMenu } from 'src/app/shared/utils/menu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menu: IMenu[] = AdminMenu;

  constructor() { }

  ngOnInit(): void {
  }


}
