import { Injectable } from '@angular/core';
import {Subscription } from 'rxjs';

import { ScreenService } from './screen.service';

export interface MenuItem {
    text: string,
    icon: string,
    route: string,
    submenu: Array<MenuItem>
}

@Injectable()
export class MenuService {

  items: Array<MenuItem>;
  isVertical = true;
  showingLeftSideMenu = false;
  private screenSubscription: Subscription;
  private hasView = false;

  constructor(private screenService: ScreenService) {
    this.screenSubscription = screenService.resize$.subscribe(() => this.onResize());
  }

  toggleLeftSideMenu() : void {
    this.isVertical = true;
    this.showingLeftSideMenu = !this.showingLeftSideMenu;
  }

  toggleMenuOrientation() {
    this.isVertical = !this.isVertical;
  }

  onResize() {
    // trigger the setter
    // this.screenLarge = false;

    let condition = this.screenService.screenWidth >= this.screenService.largeBreakpoint;
    
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
