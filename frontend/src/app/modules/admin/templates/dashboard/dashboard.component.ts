import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  menuToggle = false;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.handleMenuToggleStatus();
  }

  handleMenuToggleStatus() {
    this.commonService._menuToggle.subscribe(response => {
      this.menuToggle = response;
      localStorage.setItem(`${environment.appPrefix}:menu`, String(response));
    })
  }
}
