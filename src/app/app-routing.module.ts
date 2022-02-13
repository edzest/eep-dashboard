import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestsComponent } from './tests/tests.component';
import { TestWindowComponent } from './test-window/test-window.component';

const routes: Routes = [
  { path: 'home', component: TestsComponent },
  { path: 'test', component: TestWindowComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
