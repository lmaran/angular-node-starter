import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FrameworkBodyComponent } from "./layout/framework-body/framework-body.component";
import { ContentComponent } from "./layout/content/content.component";
import { TitleBarComponent } from "./layout/title-bar/title-bar.component";
import { FrameworkConfigService } from "./framework-config.service";
import { TopBarComponent } from "./layout/top-bar/top-bar.component";
import { StatusBarComponent } from "./layout/status-bar/status-bar.component";
import { ScreenService } from "./layout/screen.service";
import { ScreenLargeDirective } from "./layout/screen-large.directive";
import { ScreenBelowLargeDirective } from "./layout/screen-below-large.directive";
import { MenuService } from "./menus/menu.service";
import { MenuComponent } from "./menus/menu/menu.component";
import { MenuItemComponent } from "./menus/menu-item/menu-item.component";
import { SubmenuComponent } from "./menus/submenu/submenu.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SignInComponent } from "./users/sign-in/sign-in.component";
import { RegisterUserComponent } from "./users/register-user/register-user.component";
import { DynamicFormComponent } from "./dynamic-forms/dynamic-form/dynamic-form.component";
import { DynamicFieldComponent } from "./dynamic-forms/dynamic-field/dynamic-field.component";
import { PanelComponent } from "./layout/panels/panel/panel.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        FrameworkBodyComponent,
        ContentComponent,
        TitleBarComponent,
        TopBarComponent,
        StatusBarComponent,
        ScreenLargeDirective,
        ScreenBelowLargeDirective,
        MenuComponent,
        MenuItemComponent,
        SubmenuComponent,
        SignInComponent,
        RegisterUserComponent,
        DynamicFormComponent,
        DynamicFieldComponent,
        PanelComponent

    ],
    providers: [
        FrameworkConfigService,
        ScreenService,
        MenuService
    ],
    exports: [
        FrameworkBodyComponent,
        DynamicFormComponent,
        PanelComponent,
        ScreenLargeDirective,
        ScreenBelowLargeDirective
    ]
})
export class FwModule { }
