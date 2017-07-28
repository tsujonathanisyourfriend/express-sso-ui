import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MdDialog]
})
export class AppComponent {
  constructor(public dialog: MdDialog) { }

  public openDialog(): void {
    this.dialog.open(LoginComponent);
  }
}

