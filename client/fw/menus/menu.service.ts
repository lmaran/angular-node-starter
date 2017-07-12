import { Injectable } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

import { ScreenService } from "../layout/screen.service";

export interface MenuItem {
    text: string;
    icon: string;
    route: string;
    submenu: Array<MenuItem>;
}

@Injectable()
export class MenuService {

    items: Array<MenuItem>;
    leftSideMenuIsVisible = false;
    leftSideMenuIsOffCanvas = false;

    private screenSubscription: Subscription;
    private hasView = false;

    constructor(private screenService: ScreenService) {
        this.screenSubscription = screenService.resize$.subscribe(() => this.onResize());
        if (screenService.isLarge()) { this.leftSideMenuIsVisible = true; }
    }

    toggleLeftSideMenu(): void {
        this.leftSideMenuIsVisible = !this.leftSideMenuIsVisible;
        this.leftSideMenuIsOffCanvas = this.screenService.screenWidth < this.screenService.largeBreakpoint;
    }

    onResize() {
        const condition = this.screenService.screenWidth >= this.screenService.largeBreakpoint;

        if (condition && !this.hasView) { // large screen
            this.hasView = true;
            this.leftSideMenuIsVisible = true;
            this.leftSideMenuIsOffCanvas = false;
        } else if (!condition && this.hasView) { // small screen
            this.hasView = false;
            this.leftSideMenuIsVisible = false;
            this.leftSideMenuIsOffCanvas = true;
        }

    }

}
