import { Component, EventEmitter, Output } from '@angular/core';

interface IDebtorData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  isActive: string;
}


@Component({
  selector: 'app-debtor',
  // templateUrl: './debtor.component.html',
  template: "<div>debtor works!</div>",
  styleUrl: './debtor.component.css'
})
export class DebtorComponent {



  selectedDebtor: IDebtorData | null = null;

  onDebtorClick($event: any) {
    this.selectedDebtor = $event;
  }

  addDebtor(event: any) {

  }

}

/*

personal loan

mortgage loan

*/