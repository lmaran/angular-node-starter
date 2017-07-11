import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";

@Component({
    selector: "app-link3",
    templateUrl: "./link3.component.html",
    styleUrls: ["./link3.component.css"]
})
export class Link3Component implements OnInit {
    data: Object;
    apiData: Object;
    loading: boolean;

    constructor(private http: Http) { }

    ngOnInit() {
        this.http.request("/api/user").subscribe((res: Response) => {
            this.apiData = res.json();
        });
    }

    makeRequest(): void {
        this.loading = true;
        this.http.request("http://jsonplaceholder.typicode.com/posts/1").subscribe((res: Response) => {
            this.data = res.json();
            this.loading = false;
        });
    }

}

