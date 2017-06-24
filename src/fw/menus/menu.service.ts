import { Injectable } from '@angular/core';
import {Subscription } from 'rxjs/Subscription';

import { ScreenService } from '../layout/screen.service';

export interface MenuItem {
    text: string,
    icon: string,
    route: string,
    submenu: Array<MenuItem>
}

@Injectable()
export class MenuService {

  items: Array<MenuItem>;
  showingLeftSideMenu = false;
  private screenSubscription: Subscription;
  private hasView = false;

  constructor(private screenService: ScreenService) {
    this.screenSubscription = screenService.resize$.subscribe(() => this.onResize());
    if(screenService.isLarge()) { this.showingLeftSideMenu = true; }
  }

  toggleLeftSideMenu(): void {
    this.showingLeftSideMenu = !this.showingLeftSideMenu;
  }

  onResize() {
    // trigger the setter
    // this.screenLarge = false;

    const condition = this.screenService.screenWidth >= this.screenService.largeBreakpoint;

    if (condition && !this.hasView) {
      this.hasView = true;
      this.showingLeftSideMenu = true;
      // console.log("is large screen");
    } else if (!condition && this.hasView) {
      this.hasView = false;
      // console.log("is small screen");
    }

  }

}
