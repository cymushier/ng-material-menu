import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { NavigationItem } from '../../models';

@Component({
  selector: 'nmm-ng-material-menu-item',
  templateUrl: './ng-material-menu-item.component.html',
  styleUrls: ['./ng-material-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgMaterialMenuItemComponent implements OnInit {
  /**
   * The navigation item we are rendering.
   */
  @Input()
  navigationItem: NavigationItem;

  constructor() { }

  ngOnInit(): void {
  }

}
