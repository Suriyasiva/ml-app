import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-my-account',
  // templateUrl: './my-account.component.html',
  template: '<div>my account works!</div>',
  styleUrl: './my-account.component.css',
})
export class MyAccountComponent {

  constructor(private formBuilder: FormBuilder) {

  }

  selectedInfo: string = 'basicInfo';

  profileForm = this.formBuilder.group({
    firstName: ['Suriya'],
    lastName: ['S'],
    email: ['ssuriya3098@gmail.com'],
    gender: ["male"],
    dob: ["2018-07-22"],
    userProfileId: [''],
    phoneNumber: this.formBuilder.array([
      this.formBuilder.group({
        isPrimary: [true],
        phoneNumber: ['9789412582']
      }),
    ]),
    aadhaarNumber: ['123 123 123 123'],
    panNumber: ['asd123qw'],
    addressLine1: ['1st asd, asd'],
    addressLine2: [''],
    city: ['marina'],
    district: ['Chennai'],
    state: ['Tamil Nadu'],
    pincode: ['600001'],
    aadhaarFileId: [''],
    panFileId: ['']
  });

  get userPhoneNumbers() {
    return (this.profileForm.get("phoneNumber") as FormArray).controls;
  };

  addUserPhoneNumber() {
    const phoneNumberControl = this.formBuilder.group({
      isPrimary: [false],
      phoneNumber: ['']
    });

    let dep = this.profileForm.get('phoneNumber') as FormArray;
    dep.push(phoneNumberControl);
  };

  removeUserPhoneNumber(event: any, index: number) {
    this.userPhoneNumbers.splice(index, 1);
  };

  handleInfoSelect(selectedItem: string) {
    this.selectedInfo = selectedItem
  };

  handleSubmit(event: any) {
    console.log('this.form :>> ', this.profileForm.value);
  }

  updateGender(selectedGender: any) {
    this.profileForm.patchValue({ gender: selectedGender.target.value });
  };

  get getGender() {
    return this.profileForm.get("gender");
  }


};