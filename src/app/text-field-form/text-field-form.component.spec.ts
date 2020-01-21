import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldFormComponent } from './text-field-form.component';

describe('TextFieldFormComponent', () => {
  let component: TextFieldFormComponent;
  let fixture: ComponentFixture<TextFieldFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFieldFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
