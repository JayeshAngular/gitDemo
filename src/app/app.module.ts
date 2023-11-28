import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { TemplateDrivenNgModalComponent } from './template-driven-ng-modal/template-driven-ng-modal.component';
import { TemplateDrivenValidationComponent } from './template-driven-validation/template-driven-validation.component';
import { ReactiveDrivenFormComponent } from './reactive-driven-form/reactive-driven-form.component';
import { MockAssignComponent } from './mock-assign/mock-assign.component';
import { FormBuilderComComponent } from './form-builder-com/form-builder-com.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    TemplateDrivenNgModalComponent,
    TemplateDrivenValidationComponent,
    ReactiveDrivenFormComponent,
    MockAssignComponent,
    FormBuilderComComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
