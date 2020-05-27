import { Component, OnInit, Input } from '@angular/core';
import { NavigationItem } from '../models';

@Component({
  selector: 'nmm-ng-material-menu',
  template: `
    <nmm-ng-material-menu-item *ngFor="let menu of filteredMenus;" [navigationItem]="menu"></nmm-ng-material-menu-item>
  `,
  styles: []
})
export class NgMaterialMenuComponent implements OnInit {
  /**
   * The list of menu items to display
   */
  @Input()
  menus: NavigationItem[];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Retrieves the filtered menus.
   */
  public get filteredMenus(): NavigationItem[] {
    if (!this.menus) { return []; }
    return this.menus.filter(menu => !menu.hidden);
  }

}
