import { TestBed } from '@angular/core/testing';

import { NgMaterialMenuService } from './ng-material-menu.service';

describe('NgMaterialMenuService', () => {
  let service: NgMaterialMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMaterialMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
