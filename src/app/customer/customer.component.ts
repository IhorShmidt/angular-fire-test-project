import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  submitted: boolean;
  formControls = this.customerService.form.controls;

  showSuccessMessage: boolean;

  constructor(public customerService: CustomerService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.customerService.form.get('$key').value === null) {
      // insert operation

      delete this.customerService.form.value.$key;
      this.customerService.insertCustomer(this.customerService.form.value).then(() => {
        this.afterSubmit();
      });

    } else {
      const {$key, ...value} = this.customerService.form.value;
      this.customerService.updateCustomer($key, value).then(() => {
        this.afterSubmit();
      });
    }
  }

  afterSubmit() {
    this.showSuccessMessage = true;
    setTimeout(() => this.showSuccessMessage = false, 3000);
    this.submitted = false;
    this.customerService.form.reset();
  }

}
