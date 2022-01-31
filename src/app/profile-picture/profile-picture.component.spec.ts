import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/modals/add-note/add-note.component.spec.ts
import { AddNoteComponent } from './add-note.component';

describe('AddNoteComponent', () => {
  let component: AddNoteComponent;
  let fixture: ComponentFixture<AddNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNoteComponent ]
========
import { ProfilePictureComponent } from './profile-picture.component';

describe('ProfilePictureComponent', () => {
  let component: ProfilePictureComponent;
  let fixture: ComponentFixture<ProfilePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePictureComponent ]
>>>>>>>> 4b07e8eb46b35fe816c66a2de3367c2e9a5342d2:src/app/profile-picture/profile-picture.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<<< HEAD:src/app/modals/add-note/add-note.component.spec.ts
    fixture = TestBed.createComponent(AddNoteComponent);
========
    fixture = TestBed.createComponent(ProfilePictureComponent);
>>>>>>>> 4b07e8eb46b35fe816c66a2de3367c2e9a5342d2:src/app/profile-picture/profile-picture.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
