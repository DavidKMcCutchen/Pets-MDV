import { Dog } from "@pets/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as DogsActions from './dogs.actions';

export const DOG_FEATURE_KEY = 'dogs';

export interface DogState extends EntityState<Dog> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
};

export interface DogPartialState {
  readonly [DOG_FEATURE_KEY]: DogState
};

export const dogAdapter: EntityAdapter<Dog> = createEntityAdapter<Dog>();

export const initialDogState: DogState = dogAdapter.getInitialState(
  {
    loaded: false
  }
);

const onFailure = (state, {error}): DogState => ({ ...state, error});

const onDispatch = (state, action): DogState => ({
  ...state,
  loaded: false,
  error: null
})

const _dogReducer = createReducer(
  initialDogState,
  on(
    DogsActions.loadDogFailure,
    DogsActions.loadDogsFailure,
    DogsActions.deleteDogFailure,
    DogsActions.updateDogFailure,
    DogsActions.createDogFailure,
    onFailure
  ),
  on(
    DogsActions.loadDog,
    DogsActions.loadDogs,
    DogsActions.deleteDog,
    DogsActions.updateDog,
    DogsActions.createDog,
    onDispatch
  ),
  on(
    DogsActions.loadDogSuccess, (state, { dog}) =>
    dogAdapter.upsertOne(dog, { ...state, loaded: true})
  ),
  on(
    DogsActions.selectDog, (state, { dogId}) =>({
      ...state,
      selectedId: dogId
    }) 
  ),
  on(
    DogsActions.loadDogsSuccess, (state, { dogs }) =>
    dogAdapter.setAll(dogs, {...state, loaded: true})
  ),
  on(
    DogsActions.deleteDogSuccess, (state, { dog }) =>
    dogAdapter.removeOne(dog.id, {...state, loaded: true})
  ),
  on(
    DogsActions.updateDogSuccess, (state, { dog}) =>
    dogAdapter.updateOne(
      {id: dog.id, changes: dog},
      {...state, loaded: true}
    )
  ),
  on(
    DogsActions.createDogSuccess, (state, { dog }) =>
    dogAdapter.addOne(dog, {...state, loaded: true}) 
  ),
)

  export function dogReducer(
    state: DogState | undefined,
    action: Action
  ) {
    return _dogReducer(state, action)
  }