import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoButtonComponent } from './demo-button/demo-button.component';

const routes: Routes = [{ path: 'demoButton', component: DemoButtonComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
