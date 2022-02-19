import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestsComponent } from './tests/tests.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { TestInfoCardComponent } from './test-info-card/test-info-card.component';
import { TestWindowComponent } from './test-window/test-window.component';
import { TestDialogComponent } from './test-dialog/test-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    ToolbarComponent,
    TestInfoCardComponent,
    TestWindowComponent,
    TestDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
