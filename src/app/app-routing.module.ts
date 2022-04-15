import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestsComponent } from './tests/tests.component';
import { TestWindowComponent } from './test-window/test-window.component';
import { TestResultComponent } from './test-result/test-result.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: 'home', component: TestsComponent },
  { path: 'test/:id', component: TestWindowComponent },
  { path: 'result', component: TestResultComponent },
  { path: 'admin', component: AdminDashboardComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
