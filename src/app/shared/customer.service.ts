import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable()
export class CustomerService {

  constructor(private firebase: AngularFireDatabase) {
  }

  customerList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.minLength(8), Validators.required]),
    location: new FormControl(''),
  });

  getCustomers() {
    this.customerList = this.firebase.list('customers');
    return this.customerList.snapshotChanges();
  }

  insertCustomer(customer) {
    return this.customerList.push(customer);
  }

  populateForm(customer) {
    this.form.setValue(customer);
  }

  removeCustomer(key) {
    this.customerList.remove(key).then(() => {
      // this.form
    });
  }

  updateCustomer(key, value: any) {
    return this.customerList.update(key, value);
  }
}
