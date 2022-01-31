import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignationComponent } from './assignation.component';

describe('AssignationComponent', () => {
  let component: AssignationComponent;
  let fixture: ComponentFixture<AssignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
