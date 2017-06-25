import {
    Component, ElementRef, HostBinding, HostListener,
    Input, OnInit, state
} from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';

import { MenuItem, MenuService } from '../menu.service';

@Component({
    selector: 'fw-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.css'],
    animations: [
        trigger('visibilityChanged', [
            transition(':enter', [   // :enter is alias to 'void => *'
                style({ opacity: 0 }),
                animate(250, style({ opacity: 1 }))
            ]),
            transition(':leave', [   // :leave is alias to '* => void'
                animate(100, style({ opacity: 0 }))
            ])
        ])
    ]
})
export class MenuItemComponent implements OnInit {
    @Input() item = <MenuItem>null;  // see angular-cli issue #2034
    isActiveRoute = false;

    showingSubmenu = true;
    submenuLeft = 0;
    submenuTop = 34;

    constructor(private router: Router,
        public menuService: MenuService,
        private el: ElementRef) {
    }

    checkActiveRoute(route: string) {
        // this.isActiveRoute = (route == '/' + this.item.route);
        this.isActiveRoute = (route === this.item.route);
    }

    ngOnInit(): void {
        this.checkActiveRoute(this.router.url);
        // console.log(123);
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this.checkActiveRoute(event.url);
                    // console.log(event.url + ' ' + this.item.route + ' ' + this.isActiveRoute);
                }
            });
    }

    @HostListener('click', ['$event'])
    onClick(event): void {

        event.stopPropagation();

        if (this.item.submenu) {
            this.showingSubmenu = !this.showingSubmenu;
        } else if (this.item.route) {
            // force vertical menus to close (for small screens only)
            if (this.menuService.leftSideMenuIsOffCanvas) {
                this.menuService.toggleLeftSideMenu();
            }

            this.router.navigate(['/' + this.item.route]);
        }
    }

}
