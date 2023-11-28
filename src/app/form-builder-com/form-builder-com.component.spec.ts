import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderComComponent } from './form-builder-com.component';

describe('FormBuilderComComponent', () => {
  let component: FormBuilderComComponent;
  let fixture: ComponentFixture<FormBuilderComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBuilderComComponent]
    });
    fixture = TestBed.createComponent(FormBuilderComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
