import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { OverviewComponent } from '../screens/overview/overview.component';
import { DebtorComponent } from '../screens/debtor/debtor.component';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../components/top-bar/top-bar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MlInputComponent } from '../components/ml-input/ml-input.component';
import { MlTableComponent } from '../components/ml-table/ml-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MyAccountComponent } from '../screens/my-account/my-account.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SidebarComponent,
    LayoutComponent,
    OverviewComponent,
    DebtorComponent,
    MyAccountComponent,
    TopBarComponent,
    MlTableComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MlInputComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [SidebarComponent, LayoutComponent] // one component will be use in one module , if we need to use in another module we should export the component

})
export class LayoutModule { }
