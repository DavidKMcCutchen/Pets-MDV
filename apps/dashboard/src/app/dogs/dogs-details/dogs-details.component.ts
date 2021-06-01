import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Dog } from '@pets/api-interfaces';



@Component({
  selector: 'pets-dogs-details',
  templateUrl: './dogs-details.component.html',
  styleUrls: ['./dogs-details.component.scss']
})
export class DogsDetailsComponent {
  currentDog: Dog;
  originalTitle: string;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set dog(value) {
    if (value) this.originalTitle = value.name;
    this.currentDog = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }

  cancel() {
    this.cancelled.emit();
  }

}
