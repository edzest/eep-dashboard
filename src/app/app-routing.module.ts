import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestsComponent } from './tests/tests.component';
import { TestWindowComponent } from './test-window/test-window.component';
import { TestResultComponent } from './test-result/test-result.component';
import { TestSummaryItemComponent } from './test-summary-item/test-summary-item.component';

const routes: Routes = [
  { path: 'home', component: TestsComponent },
  { path: 'test/:id', component: TestWindowComponent },
  { path: 'result', component: TestResultComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
