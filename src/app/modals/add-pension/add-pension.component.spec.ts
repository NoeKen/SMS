import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPensionComponent } from './add-pension.component';

describe('AddPensionComponent', () => {
  let component: AddPensionComponent;
  let fixture: ComponentFixture<AddPensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
