import { Component, Input, OnInit } from '@angular/core';

import { MenuItem, MenuService } from '../menu.service';

@Component({
  selector: 'fw-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.css']
})
export class PopupMenuComponent implements OnInit {

  @Input() menu: Array<MenuItem>;

  constructor(public menuService: MenuService) { }

  ngOnInit() {
  }

}
