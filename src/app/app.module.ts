import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { 
  MdButtonModule, 
  MdCheckboxModule, 
  MdToolbarModule, 
  MdIconModule, 
  MdMenuModule, 
  MdTabsModule, 
  MdDialog,
  MdDialogModule,
  MdInputModule,
  MdTableModule
} from '@angular/material';
import 'hammerjs';
import {CdkTableModule} from '@angular/cdk';


import { AppComponent } from './components/app.component';
import { LoginComponent } from './components/login/login.component';
import { PriceService } from './services/price.service';
import { Http } from '@angular/http';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerListComponent
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
    MdInputModule,
    HttpModule,
    MdTableModule,
    CdkTableModule
  ],
  providers: [PriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
