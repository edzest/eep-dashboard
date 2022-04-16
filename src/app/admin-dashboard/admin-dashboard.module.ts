import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { CreateTestComponent } from './create-test/create-test.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionEditorComponent } from './create-test/question-editor/question-editor.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    CreateTestComponent,
    QuestionEditorComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminDashboardModule { }
