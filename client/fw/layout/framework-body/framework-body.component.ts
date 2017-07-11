import { Component, OnInit } from "@angular/core";

import { FrameworkConfigService } from "../../framework-config.service";

@Component({
    selector: "fw-framework-body",
    templateUrl: "./framework-body.component.html",
    styleUrls: ["./framework-body.component.css"]
})
export class FrameworkBodyComponent implements OnInit {

    constructor(public frameworkConfigService: FrameworkConfigService) { }

    ngOnInit() { }

}
