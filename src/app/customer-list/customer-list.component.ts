import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../shared/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(public customerService: CustomerService) { }

  customers = [];

  ngOnInit() {
    this.customerService.getCustomers().subscribe(
      list => {
        this.customers = list.map(item => ({$key: item.key, ...item.payload.val()}));
      });
  }


}
