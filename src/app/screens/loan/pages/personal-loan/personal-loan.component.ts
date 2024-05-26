import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-personal-loan',
  templateUrl: './personal-loan.component.html',
  styleUrl: './personal-loan.component.css'
})
export class PersonalLoanComponent {

  constructor(private formBuilder: FormBuilder) { }

  personalLoanData = this.formBuilder.group({
    loanAmount: [],
  })

}
