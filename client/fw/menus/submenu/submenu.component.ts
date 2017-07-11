import { Component, Input, OnInit } from "@angular/core";

import { MenuItem, MenuService } from "../menu.service";

@Component({
    selector: "fw-submenu",
    templateUrl: "./submenu.component.html",
    styleUrls: ["./submenu.component.css"]
})
export class SubmenuComponent implements OnInit {

    @Input() menu: Array<MenuItem>;

    constructor(public menuService: MenuService) { }

    ngOnInit() { }

}
