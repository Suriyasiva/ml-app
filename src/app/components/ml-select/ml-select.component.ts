import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


interface IOption { id: number | string, name: string }


@Component({
  selector: 'app-ml-select',
  templateUrl: './ml-select.component.html',
  styleUrl: './ml-select.component.css',
  standalone: true,
  imports: [NgSelectModule, FormsModule, ReactiveFormsModule]
})
export class MlSelectComponent {


  @Input()
  selectedCar!: number | any;

  @Input()
  label: string = 'Label';

  handleChange(event: any) {
    console.log('event :>> ', event);
  }
  @Input()
  cars!: IOption[];

  constructor() {
    this.cars = [
      { id: 'Volvo', name: 'Volvo' },
      { id: 'Saab', name: 'Saab' },
      { id: 'Opel', name: 'Opel' },
      { id: 'Audi', name: 'Audi' },
    ]
  }

}
