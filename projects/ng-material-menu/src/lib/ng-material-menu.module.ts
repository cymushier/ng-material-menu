import { NgModule } from '@angular/core';
import { NgMaterialMenuComponent } from './components/ng-material-menu.component';
import { NgMaterialMenuItemComponent } from './components/ng-material-menu-item/ng-material-menu-item.component';
import { NgMaterialTopMenuComponent } from './components/ng-material-top-menu/ng-material-top-menu.component';
import { CommonModule } from '@angular/common';

// Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    NgMaterialMenuComponent,
    NgMaterialMenuItemComponent,
    NgMaterialTopMenuComponent
  ],
  imports: [
    CommonModule,
    // Material modules
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    NgMaterialMenuComponent,
    NgMaterialMenuItemComponent,
    NgMaterialTopMenuComponent
  ]
})
export class NgMaterialMenuModule { }
