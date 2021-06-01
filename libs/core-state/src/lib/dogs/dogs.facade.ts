import { Injectable } from "@angular/core";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { Dog } from "@pets/api-interfaces";
import { map, filter } from "rxjs/operators";
import * as DogsActions from './dogs.actions';
import * as DogsSelectors from './dogs.selectors';
import * as fromDogs from './dogs.reducer';


@Injectable({
  providedIn: 'root',
})

export class DogFacade {
  allDogs$ = this.store.pipe(
    map((state) => DogsSelectors.getAllDogs(state)),
  )
  selectedDogs$ = this.store.pipe(select(DogsSelectors.getSelectedDog));
  loaded$ = this.store.pipe(select(DogsSelectors.getDogsLoaded));

  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
    action.type === DogsActions.createDog({} as any) .type  ||
    action.type === DogsActions.deleteDog({} as any) .type  ||
    action.type === DogsActions.updateDog({} as any) .type  
  ),
  )
  selectDog(dogId: string) {
    this.dispatch(DogsActions.selectDog({ dogId }))
  }

  loadDogs() {
    this.dispatch(DogsActions.loadDogs());
  }

  loadDog(dogId: string) {
    this.dispatch(DogsActions.loadDog({ dogId }));
  }

  saveDog(dog: Dog) {
    dog.id ? this.updateDog(dog) : this.createDog(dog);
  }

  createDog(dog: Dog) {
    this.dispatch(DogsActions.createDog({ dog }));
  }

  updateDog(dog: Dog) {
    this.dispatch(DogsActions.updateDog({ dog }));
  }

  deleteDog(dog: Dog) {
    this.dispatch(DogsActions.deleteDog({ dog }))
  }

  dispatch(action: Action) {
    this.store.dispatch(action)
  } 

  constructor(
    private store: Store<fromDogs.DogPartialState>,
    private actions$: ActionsSubject
  ) {}

}