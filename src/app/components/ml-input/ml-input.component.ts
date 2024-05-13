import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ml-input',
  templateUrl: './ml-input.component.html',
  styleUrl: './ml-input.component.css',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MlInputComponent),
      multi: true
    }
  ]
})
export class MlInputComponent implements ControlValueAccessor {

  @Input()
  type: string = "text";

  @Input()
  label: string = "label";

  @Input()
  placeholder: string = "Placeholder";

  @Input()
  _val: string = "Placeholder";

  onChange: any = () => { };

  onTouch: any = () => { };

  set value(val: any) {
    if (val !== undefined && this._val !== val) {
      this._val = val;
      this.onChange(val)
      this.onTouch(val)
    }
  }

  // this method sets the value programmatically
  writeValue(value: any) {
    this.value = value
  }

  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: (_: any) => void): void {
    this.onTouch = fn
  }

}
