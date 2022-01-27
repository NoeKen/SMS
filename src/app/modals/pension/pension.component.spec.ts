import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionComponent } from './pension.component';

describe('PensionComponent', () => {
  let component: PensionComponent;
  let fixture: ComponentFixture<PensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
