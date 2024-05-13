import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {

  constructor(private formBuilder: FormBuilder) {
  }

  myForm: any = this.formBuilder.group({
    firstName: [""]
  })

  onSubmit(values: any) {
    console.log('values :>> ', values);
    console.log('this.myForm :>> ', this.myForm);

  }
}
