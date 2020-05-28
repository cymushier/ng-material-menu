import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NavigationItem } from '../../models';

@Component({
  selector: 'nmm-ng-material-menu-item',
  templateUrl: './ng-material-menu-item.component.html',
  styleUrls: ['./ng-material-menu-item.component.scss']
})
export class NgMaterialMenuItemComponent implements OnInit, OnChanges {
  /**
   * The navigation item we are rendering.
   */
  @Input()
  navigationItem: NavigationItem;
  /**
   * The currently selected navigation items.
   */
  @Input()
  selectedItems: NavigationItem[] | undefined;
  /**
   * The current input level of the menus
   */
  @Input()
  level = 1;
  /**
   * Whether we are displaying the wide version of the menu or not.
   */
  @Input()
  isWide = false;
  /**
   * Whether the parent node is expanded or not.
   */
  @Input()
  isParentExpanded = true;

  isExpanded = false;
  isSelected = false;
  classes: { [index: string]: boolean };

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.selectedItems) {
      const currentSelected = this.selectedItems.indexOf(this.navigationItem);
      this.isSelected = currentSelected !== -1; // this node is the selected node or its ancestor
      this.isExpanded = this.isParentExpanded &&
        (this.isSelected || // expand if selected or ...
          // preserve expanded state when display is wide; collapse in mobile.
          (this.isWide && this.isExpanded));
    } else {
      this.isSelected = false;
    }

    this.setClasses();
  }

  /**
   * Retrieves the navigation item children
   */
  public get navigationItemChildren(): NavigationItem[] {
    return this.navigationItem && this.navigationItem.children ? this.navigationItem.children.filter(n => !n.hidden) : [];
  }

  /**
   * Update the classes as well as the ones we currently have.
   */
  setClasses() {
    this.classes = {
      [`level-${this.level}`]: true,
      collapsed: !this.isExpanded,
      expanded: this.isExpanded,
      selected: this.isSelected
    };
  }

  /**
   * When we click the navigation item.
   */
  headerClicked() {
    this.isExpanded = !this.isExpanded;
    this.setClasses();
  }
}
