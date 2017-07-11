import { Routes } from "@angular/router";

import { AuthenticatedUserComponent } from "./authenticated-user/authenticated-user.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { CountryListComponent } from "./country-list/country-list.component";
import { CountryDetailComponent } from "./country-detail/country-detail.component";
import { CountryMaintComponent } from "./country-maint/country-maint.component";
import { SettingsComponent } from "./settings/settings.component";
import { SignInComponent } from "../fw/users/sign-in/sign-in.component";
import { RegisterUserComponent } from "../fw/users/register-user/register-user.component";
import { AuthGuard } from "./services/auth-guard.service";
import { Link1Component } from "./link1/link1.component";
import { Link2Component } from "./link2/link2.component";
import { Link3Component } from "./link3/link3.component";

// export const appRoutes: Routes = [
//   { path: 'signin', component: SignInComponent },
//   { path: 'register', component: RegisterUserComponent },
//   { path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard], children: [
//       { path: '', canActivateChild: [AuthGuard], children: [
//           { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
//           { path: 'dashboard', component: DashboardComponent },
//           { path: 'country-list/:count', component: CountryListComponent },
//           // { path: 'country-detail/:id', component: CountryDetailComponent },
//           { path: 'country-detail/:id/:operation', component: CountryDetailComponent },
//           { path: 'country-maint', component: CountryMaintComponent },
//           { path: 'settings', component: SettingsComponent },
//         ] }
//     ] },
//   { path: '', component: SignInComponent },
//   { path: '**', component: SignInComponent }
// ];

export const appRoutes: Routes = [
    { path: "signin", component: SignInComponent },
    { path: "register", component: RegisterUserComponent },
    {
        path: "authenticated", component: AuthenticatedUserComponent, canActivate: [AuthGuard], children: [
            {
                path: "", canActivateChild: [AuthGuard], children: [
                    { path: "", redirectTo: "link1", pathMatch: "full" },
                    { path: "link1", component: Link1Component },
                    { path: "link2", component: Link2Component },
                    { path: "link3", component: Link3Component }
                ]
            }
        ]
    },

    { path: "", component: SignInComponent },
    { path: "**", component: SignInComponent }
];
