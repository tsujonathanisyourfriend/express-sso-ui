import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { PriceService } from '../../services/price.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [Http]
})
export class LoginComponent {
    constructor(private dialogRef: MdDialogRef<LoginComponent>, private priceService: PriceService) { }

    private onSubmit(): void {
        this.priceService.login('', '');
        this.dialogRef.close();
    }
}