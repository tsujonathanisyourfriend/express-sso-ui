import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @Input()
  public customers: Customer[];

  ngOnInit() { }
}
