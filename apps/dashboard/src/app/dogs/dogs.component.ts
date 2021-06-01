import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emptyDog, Dog } from '@pets/api-interfaces';
import { DogFacade } from '@pets/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'pets-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  allDogs$: Observable<Dog[]> = this.dogFacade.allDogs$;
  selectedDog$: Observable<Dog> = this.dogFacade.selectedDogs$;

  form: FormGroup;

  constructor(
    private dogFacade: DogFacade,
    private formBuilder: FormBuilder
  ) {
    this.dogFacade.mutations$.subscribe((_) => this.resetDog());
  }

  ngOnInit() {
    this.initForm();
    this.dogFacade.loadDogs();
    this.resetDog()
  }

  selectDog(dog: Dog) {
    this.dogFacade.selectDog(dog.id)
    this.form.patchValue(dog);
  }

  saveDog(dog: Dog) {
    this.dogFacade.saveDog(dog);
  }

  deleteDog(dog: Dog) {
    this.dogFacade.deleteDog(dog);
  }

  resetDog() {
    this.form.reset();
    this.selectDog(emptyDog)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      breed: [''],
    })
  }
}