import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMaterialMenuItemComponent } from './ng-material-menu-item.component';

describe('NgMaterialMenuItemComponent', () => {
  let component: NgMaterialMenuItemComponent;
  let fixture: ComponentFixture<NgMaterialMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMaterialMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMaterialMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
