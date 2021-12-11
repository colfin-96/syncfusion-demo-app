import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  DropDownButtonModule,
  SplitButtonModule,
  ProgressButtonModule,
} from '@syncfusion/ej2-angular-splitbuttons';
import {
  ButtonModule,
  CheckBoxModule,
  RadioButtonModule,
  SwitchModule,
} from '@syncfusion/ej2-angular-buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoButtonComponent } from './demo-button/demo-button.component';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@NgModule({
  declarations: [AppComponent, DemoButtonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CheckBoxModule,
    RadioButtonModule,
    SwitchModule,
    DropDownButtonModule,
    SplitButtonModule,
    ProgressButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
