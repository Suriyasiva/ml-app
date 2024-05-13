import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from '../screens/overview/overview.component';
import { LayoutComponent } from './layout.component';
import { DebtorComponent } from '../screens/debtor/debtor.component';
import { DraftDocumentComponent } from '../screens/draf-document/draf-document.component';
import { MyAccountComponent } from '../screens/my-account/my-account.component';
import { LoanComponent } from '../screens/loan/loan.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent, // code will compile when module is called
        // loadComponent = code will compile in exact path
      },
      {
        path: 'debtor',
        component: DebtorComponent
      },
      {
        path: 'loan',
        component: LoanComponent
      },
      {
        path: 'draft-documents',
        component: DraftDocumentComponent
      },
      {
        path: 'my-account',
        component: MyAccountComponent,
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
