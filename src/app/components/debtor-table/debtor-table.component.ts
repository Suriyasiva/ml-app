import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';


const debtorData: IDebtorData[] = [
  {
    firstName: 'John',
    lastName: "suriya",
    email: 'john@example.com',
    phoneNumber: '+1234567890',
    isActive: "active"
  },
  {
    firstName: 'Alice',
    lastName: "suriya",
    email: 'alice@example.com',
    phoneNumber: '+1987654321',
    isActive: "active"
  },
  {
    firstName: 'Bob',
    lastName: "suriya",
    email: 'bob@example.com',
    phoneNumber: '+1123456789',
    isActive: "active"
  },
  {
    firstName: 'Emma',
    lastName: "suriya",
    email: 'emma@example.com',
    phoneNumber: '+1567890123',
    isActive: "inactive"
  },
  {
    firstName: 'Michael',
    lastName: "suriya",
    email: 'michael@example.com',
    phoneNumber: '+1987654321',
    isActive: "active"
  }
];

//  "https://modernadmin.evolvision.com/assets/images/portrait/small/avatar-s-19.png"
interface IDebtorData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  isActive: string;
}

@Component({
  selector: 'app-ml-table',
  templateUrl: './debtor-table.component.html',
  styleUrl: './debtor-table.component.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
})
export class DebtorTable {

  @Input()
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
    'isActive'
  ];

  @Input()
  data: IDebtorData[] = [...debtorData, ...debtorData];


  @Output() selectedDebtorProfile = new EventEmitter<IDebtorData>();


  selectedDebtor: any = "";


  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.data);
    //
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.selectedDebtor = this.data[0].firstName
    this.selectedDebtorProfile.emit(this.data[0]);
  }

  // sortData(event: any): any {
  //   this.dataSource = new MatTableDataSource(this.data)
  // }

  onDebtorClick(event: any, debtor: IDebtorData) {
    this.selectedDebtor = debtor.firstName;
    this.selectedDebtorProfile.emit(debtor);
  }

  onPageChange(event: any) {
    console.log('event :>> ', event);
  }

  onSortChange(event: any) {

  }

}


/*

 <!-- Fruit Column -->
    <ng-container matColumnDef="gender">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>Gender</th>
      <td mat-cell *matCellDef="let row">
        <div class="table-row d-flex align-items-center">
          @if (row.gender==="Male") {
          <i class="material-icons">male</i> {{ row.gender }}

          }@else {
          <i class="material-icons">female</i> {{ row.gender }}
          }
        </div>
      </td>
    </ng-container>

*/