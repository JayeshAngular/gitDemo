import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockAssignComponent } from './mock-assign.component';

describe('MockAssignComponent', () => {
  let component: MockAssignComponent;
  let fixture: ComponentFixture<MockAssignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockAssignComponent]
    });
    fixture = TestBed.createComponent(MockAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
