import { ActionReducerMap } from "@ngrx/store";
import * as fromDogs from './dogs/dogs.reducer';

export interface AppState {
  [fromDogs.DOG_FEATURE_KEY]: fromDogs.DogState
}

export const reducers: ActionReducerMap<AppState> = {
  [fromDogs.DOG_FEATURE_KEY]: fromDogs.dogReducer
}