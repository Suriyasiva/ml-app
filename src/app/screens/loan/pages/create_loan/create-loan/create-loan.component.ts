import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-loan',
  templateUrl: './create-loan.component.html',
  styleUrl: './create-loan.component.css'
})
export class CreateLoanComponent {

  constructor(private formBuilder: FormBuilder) { }

  selectedIndex: number = 0;

  personalLoanData = this.formBuilder.group({
    interest: [],
    loanTenure: [],
    principleAmount: []
  })


  handleStepperSelect(index: any) {
    this.selectedIndex = index;
  }

}