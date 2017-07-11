import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { FwModule } from "../fw/fw.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SettingsComponent } from "./settings/settings.component";
import { appRoutes } from "./app.routing";
import { CountryDetailComponent } from "./country-detail/country-detail.component";
import { CountryListComponent } from "./country-list/country-list.component";
import { CountryMaintComponent } from "./country-maint/country-maint.component";
import { AuthenticatedUserComponent } from "./authenticated-user/authenticated-user.component";
import { UserService } from "./services/user.service";
import { UserApi } from "../fw/users/user-api";
import { AuthGuard } from "./services/auth-guard.service";
import { AppDataService } from "./services/app-data.service";
import { CountryPanelComponent } from "./panels/country-panel/country-panel.component";
import { ImagePanelComponent } from "./panels/image-panel/image-panel.component";
import { Link1Component } from "./link1/link1.component";
import { Link2Component } from "./link2/link2.component";
import { Link3Component } from "./link3/link3.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryMaintComponent,
    AuthenticatedUserComponent,
    CountryPanelComponent,
    ImagePanelComponent,
    Link1Component,
    Link2Component,
    Link3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    { provide: UserApi, useExisting: UserService },
    AuthGuard,
    AppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
