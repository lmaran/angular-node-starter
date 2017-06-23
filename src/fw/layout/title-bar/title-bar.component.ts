import { Component, OnInit } from '@angular/core';
// we don't need ScreenService if 'fwScreenLarge' directive is used
// import { ScreenService } from '../services/screen.service';
import { MenuService } from '../../menus/menu.service';

@Component({
  selector: 'fw-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor(
    // private screenService: ScreenService
    public menuService: MenuService) { }

  ngOnInit() {
  }

}
