import { Component, OnInit, Input } from '@angular/core';
import { NavigationItem } from '../models/models';

@Component({
  selector: 'nmm-ng-material-menu',
  template: `
    <nmm-ng-material-menu-item *ngFor="let menu of filteredMenus;" [navigationItem]="menu" [selectedItems]="selectedItems" [isWide]="isWide">
    </nmm-ng-material-menu-item>
  `,
  styles: []
})
export class NgMaterialMenuComponent implements OnInit {
  /**
   * The list of menu items to display
   */
  @Input()
  menus: NavigationItem[];
  /**
   * Currently selected navigation items.
   */
  @Input()
  selectedItems: NavigationItem[] | undefined;
  /**
   * Whether it's a wide display for the menu.
   */
  @Input()
  isWide = false;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Retrieves the filtered menus.
   */
  public get filteredMenus(): NavigationItem[] {
    return this.menus ? this.menus.filter(menu => !menu.hidden) : [];
  }

}
