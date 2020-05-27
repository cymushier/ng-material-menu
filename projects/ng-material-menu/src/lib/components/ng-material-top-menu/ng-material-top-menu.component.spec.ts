import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMaterialTopMenuComponent } from './ng-material-top-menu.component';

describe('NgMaterialTopMenuComponent', () => {
  let component: NgMaterialTopMenuComponent;
  let fixture: ComponentFixture<NgMaterialTopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMaterialTopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMaterialTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
