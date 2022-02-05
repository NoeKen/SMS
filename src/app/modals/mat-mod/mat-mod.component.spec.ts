import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatModComponent } from './mat-mod.component';

describe('MatModComponent', () => {
  let component: MatModComponent;
  let fixture: ComponentFixture<MatModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatModComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
