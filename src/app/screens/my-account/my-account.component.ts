import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css',
})
export class MyAccountComponent {

  constructor(private formBuilder: FormBuilder) { }

  selectedInfo: string = 'identity';

  profileForm = this.formBuilder.group({
    firstName: ['Suriya', Validators.required],
    lastName: ['S', Validators.required],
    email: ['ssuriya3098@gmail.com', Validators.required],
    gender: ['', Validators.required],
    dob: ["2018-07-22", Validators.required],
    userProfileId: [''],
    phoneNumber: this.formBuilder.array([
      this.formBuilder.group({
        isPrimary: [true],
        phoneNumber: ['9789412582']
      }),
    ]),
    aadhaarNumber: ['123 123 123 123', Validators.required],
    panNumber: ['asd123qw', Validators.required],
    addressLine1: ['1st asd, asd', Validators.required],
    addressLine2: [''],
    city: ['marina', Validators.required],
    district: ['Chennai', Validators.required],
    state: ['Tamil Nadu', Validators.required],
    pincode: ['600001', Validators.required],
    aadhaarFileId: [''],
    panFileId: ['']
  });

  get userPhoneNumbers() {
    return (this.profileForm.get("phoneNumber") as FormArray).controls;
  };

  addUserPhoneNumber() {
    const suretyFormGroup = this.formBuilder.group({
      isPrimary: [false],
      phoneNumber: ['']
    });
    this.userPhoneNumbers.push(suretyFormGroup);
  };

  removeUserPhoneNumber(event: any, index: number) {
    this.userPhoneNumbers.splice(index, 1);
  };

  handleInfoSelect(selectedItem: string) {
    this.selectedInfo = selectedItem
  };

  handleSubmit(value: any) {
    console.log('this.form :>> ', this.profileForm);
  }

};