import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenNgModalComponent } from './template-driven-ng-modal.component';

describe('TemplateDrivenNgModalComponent', () => {
  let component: TemplateDrivenNgModalComponent;
  let fixture: ComponentFixture<TemplateDrivenNgModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDrivenNgModalComponent]
    });
    fixture = TestBed.createComponent(TemplateDrivenNgModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
