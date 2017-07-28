import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MdButtonModule, 
  MdCheckboxModule, 
  MdToolbarModule, 
  MdIconModule, 
  MdMenuModule, 
  MdTabsModule, 
  MdDialog,
  MdDialogModule,
  MdInputModule
} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './components/app.component';
import { LoginComponent } from './components/login/login.component';
import { PriceService } from './services/price.service';
import { Http } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  entryComponents: [LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdMenuModule,
    MdTabsModule,
    MdDialogModule,
    MdInputModule
  ],
  providers: [PriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
