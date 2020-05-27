import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMaterialMenuComponent } from './components/ng-material-menu.component';

describe('NgMaterialMenuComponent', () => {
  let component: NgMaterialMenuComponent;
  let fixture: ComponentFixture<NgMaterialMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMaterialMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMaterialMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
