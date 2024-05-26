import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

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
  leftIcon?: string;

  @Input()
  rightIcon?: string;

  @Input()
  editable?: string;


  onChange: any = () => { };

  onTouch: any = () => { };

  val: any = "";

  private valueChanges = new Subject();

  private touches = new Subject();

  set value(val: any) {
    this.val = val;
    this.onChange(val)
    this.onTouch(val)
  }

  // this method sets the value programmatically
  writeValue(value: any) {
    this.value = value
  }

  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: (_: any) => void): void {
    this.valueChanges.subscribe(fn);
    // this.onChange = fn
  }

  registerOnTouched(fn: (_: any) => void): void {
    this.onTouch = fn
    // this.touches.next();
  }

  updateValue(_value: any) {
    this.val = _value;
    this.valueChanges.next(_value);
  }

}
