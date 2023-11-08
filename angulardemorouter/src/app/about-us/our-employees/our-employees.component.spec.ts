import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurEmployeesComponent } from './our-employees.component';

describe('OurEmployeesComponent', () => {
  let component: OurEmployeesComponent;
  let fixture: ComponentFixture<OurEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
