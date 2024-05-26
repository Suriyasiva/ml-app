import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


interface IFinanceDataDetails {
    loanName: string;
    loanDescription: string;
    logo?: string;
    debtors: number;
    hasSubscribed: boolean
}

@Component({
    selector: 'loan-Details-container',
    templateUrl: './loan-details-container.html',
    styleUrl: './loan-details-container.css',
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    imports: [CommonModule],
})
export class LoanDetailsContainer {


    @Input()
    financeData!: IFinanceDataDetails;

    avatarGroup = ["S", "V", "T"];

    backgroundColors = ["#F0F8FF", "#FAEBD7", "#E0FFFF", "#FDF5E6", "#F5FFFA"]


    constructor(private router: Router) { }

    onCardClick(selectedItem: IFinanceDataDetails) {
        if (selectedItem.hasSubscribed) {
            this.router.navigate(["/app/dashboard/loan/personal-loan"])
        }
    }

}

