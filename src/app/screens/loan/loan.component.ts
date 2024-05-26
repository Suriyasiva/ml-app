import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


interface ILoanDetails {
  loanName: string;
  loanDescription: string;
  logo?: string;
  debtors: number;
  hasSubscribed: boolean
}
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrl: './loan.component.css'
})
export class LoanComponent {


  financeDetails: ILoanDetails[] = [
    {
      debtors: 2,
      loanDescription: "Personal loans are loans with fixed amounts, interest rates, and monthly payback amounts over defined periods of time",
      loanName: "Personal Loan",
      hasSubscribed: true
    },
    {
      debtors: 2,
      loanDescription: "Interest is the cost you pay to borrow money or the compensation you receive for lending money.",
      loanName: "Simple Interest",
      hasSubscribed: false
    },
    {
      debtors: 2,
      loanDescription: "Interest is the cost of using borrowed money, or more specifically, the amount a lender receives for advancing money to a borrower. When paying interest, the borrower will mostly pay a percentage of the principal (the borrowed amount). The concept of interest can be categorized into simple interest or compound interest.",
      loanName: "Compound Interest",
      hasSubscribed: false
    },
    {
      debtors: 2,
      loanDescription: "EMI representing the fixed payment amount paid by a borrower to a lender at a specified date each calendar month.",
      loanName: "EMI",
      hasSubscribed: false
    },
  ]

  constructor(private formBuilder: FormBuilder) { }

  loanDetails = this.formBuilder.group({
    loanType: [],
    loanAmount: [],
    interestRate: [],
    loanTenure: [],
    debtorId: []
  });

}
