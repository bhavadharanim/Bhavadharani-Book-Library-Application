import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteDetailComponent } from './admin-delete-detail.component';

describe('AdminDeleteDetailComponent', () => {
  let component: AdminDeleteDetailComponent;
  let fixture: ComponentFixture<AdminDeleteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeleteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
