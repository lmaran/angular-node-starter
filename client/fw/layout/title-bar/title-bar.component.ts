import { Component, OnInit } from "@angular/core";

import { MenuService } from "../../menus/menu.service";

@Component({
    selector: "fw-title-bar",
    templateUrl: "./title-bar.component.html",
    styleUrls: ["./title-bar.component.css"]
})
export class TitleBarComponent implements OnInit {

    constructor(public menuService: MenuService) { }

    ngOnInit() { }

}
