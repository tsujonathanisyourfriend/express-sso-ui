import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { PriceService } from '../services/price.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MdDialog]
})
export class AppComponent {
  private customers: any[];
  private error: string;

  constructor(public dialog: MdDialog, private priceService: PriceService) { }

  getCustomers(): void {
    this.priceService.loadDate().subscribe(response=>{
      this.customers = response;
    }, error => {
      this.error = error;
    });
  }

  private openDialog(): void {
    this.dialog.open(LoginComponent);
  }
}

