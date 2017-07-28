import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { PriceService } from '../../services/price.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private dialogRef: MdDialogRef<LoginComponent>, private priceService: PriceService) { }

    private onSubmit(): void {
        //this.priceService.login('', '');
        this.dialogRef.close();
    }
}