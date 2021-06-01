import { createAction, props } from "@ngrx/store";
import { Dog } from "@pets/api-interfaces";

// Select Entity

export const selectDog = createAction(
  '[DOGS] Select Dog',
  props<{ dogId: string}>()
)

// Load all Entities

export const loadDogs = createAction(
  '[DOGS] Load Dogs'
);

export const loadDogsSuccess = createAction(
  '[DOGS] Load Dogs Succeeded',
  props<{ dogs: Dog[] }>()
);

export const loadDogsFailure = createAction(
  '[DOGS] Load Dogs Failed',
  props<{ error: any }>()
);

// Load Single Entity

export const loadDog = createAction(
  '[DOGS] Load Dog',
  props<{ dogId: string}>()
)

export const loadDogSuccess = createAction(
  '[DOGS] Load Dog Succeeded',
  props<{ dog: Dog}>()
)

export const loadDogFailure = createAction(
  '[DOGS] Load Dog Failure',
  props<{ error: any}>()
)

// Load Entity Update

export const updateDog = createAction(
  '[DOGS] Update Dog',
  props<{ dog: Dog}>()
)

export const updateDogSuccess = createAction(
  '[DOGS] Update Dog Succeeded',
  props<{ dog: Dog}>()
)

export const updateDogFailure = createAction(
  '[DOGS] Update Dog Failed',
  props<{ error: any}>()
)

// Load Entity Delete

export const deleteDog = createAction(
  '[DOG] Dog Deleted',
  props<{dog: Dog}>()
);

export const deleteDogSuccess = createAction(
  '[DOG] Dog Deleted Success',
  props<{dog: Dog}>()
);

export const deleteDogFailure = createAction(
  '[DOG] Dog Deleted Failure',
  props<{error: any}>()
);

// Load Create Entity

export const createDog = createAction(
  '[DOG] Create Dog',
  props<{ dog: Dog}>()
);

export const createDogSuccess = createAction(
  '[DOG] Create Dog Success',
  props<{ dog: Dog}>()
);

export const createDogFailure = createAction(
  '[DOG] Create Dog Failure',
  props<{ error: any }>()
);