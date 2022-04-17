import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {
  }

  private getLocalStorageMenuToggle = Boolean(localStorage.getItem(`${environment.appPrefix}:menu`) === 'true');

  public _menuToggle = new BehaviorSubject<boolean>(this.getLocalStorageMenuToggle);
  public _menuTitle = new BehaviorSubject<string>('Dashboard');

  get menuToggle(): boolean {
    return this._menuToggle.value;
  }

  set menuToggle(data: boolean){
    this._menuToggle.next(data);
  }

  get menuTitle(): string {
    return this._menuTitle.value;
  }

  set menuTitle(data: string){
    this._menuTitle.next(data);
  }

}
