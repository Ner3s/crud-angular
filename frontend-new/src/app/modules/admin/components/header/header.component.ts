import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = '';

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.handleMenuToggleStatus();
  }

  handleToggle() {
    this.commonService.menuToggle = !this.commonService.menuToggle;
  }

  handleMenuToggleStatus() {
    this.commonService._menuTitle.subscribe(response => {
      this.title = response;
    })
  }
}
