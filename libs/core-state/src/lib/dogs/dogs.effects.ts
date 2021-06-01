import { Injectable } from "@angular/core";
import { Dog } from "@pets/api-interfaces";
import { DogsService } from "@pets/core-data";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import * as DogsActions from './dogs.actions';
import { filter, map, tap } from 'rxjs/operators';
import { fetch, pessimisticUpdate } from '@nrwl/angular';


@Injectable()
export class DogEffects {
  loadDog$ = createEffect(() =>
  this.actions$.pipe(
    ofType(DogsActions.loadDog),
    fetch({
      run: (action) =>
       this.dogsService
        .find(action.dogId)
        .pipe(
          map((dog: Dog) => DogsActions.loadDogSuccess({ dog }))
        ),
      onError: (action, error) => DogsActions.loadDogFailure({ error })
    })
  ) )

  loadDogs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DogsActions.loadDogs), // filter((action) => action.type === DogsActions.loadDogs.type)
      fetch({
        run: () =>
          this.dogsService
            .all()
            .pipe(
              map((dogs: Dog[]) =>
                DogsActions.loadDogsSuccess({ dogs })
              )
            ),
        onError: (action, error) => DogsActions.loadDogsFailure({ error }),
      })
    )
  );

  updateDog$ = createEffect(() =>
  this.actions$.pipe(
    ofType(DogsActions.updateDog),
    pessimisticUpdate({
      run: (action) =>
      this.dogsService
      .update(action.dog)
      .pipe(
        map((dog: Dog) => DogsActions.updateDogSuccess({ dog })
        )
      ),
    onError: (action, error) => DogsActions.updateDogFailure({ error })  
    })
  ) )

  deleteDog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DogsActions.deleteDog),
      pessimisticUpdate({
        run: (action) =>
        this.dogsService
        .delete(action.dog)
        .pipe(
          map(() => DogsActions.deleteDogSuccess({ dog: action.dog })
          )
        ),
      onError: (action, error) => DogsActions.deleteDogFailure({ error })  
      })
    )
    )

    createDog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DogsActions.createDog),
      pessimisticUpdate({
        run: (action) =>
        this.dogsService
        .create(action.dog)
        .pipe(
          map((dog: Dog) => DogsActions.createDogSuccess({ dog })
          )
        ),
      onError: (action, error) => DogsActions.createDogFailure({ error })  
      })
    ))
  

constructor(private actions$: Actions, private dogsService: DogsService) {}
}
