import {  createFeatureSelector, createSelector } from "@ngrx/store";
import { emptyDog } from "@pets/api-interfaces";
import { dogAdapter, DogState, DOG_FEATURE_KEY } from "./dogs.reducer";

export const getDogState = createFeatureSelector<DogState>(DOG_FEATURE_KEY);

const { selectAll, selectEntities } = dogAdapter.getSelectors();

export const getDogsLoaded = createSelector(
  getDogState,
  (state: DogState) => state.loaded
);

export const getDogError = createSelector(
  getDogState,
  (state: DogState) => state.error
);

export const getAllDogs = createSelector(
  getDogState,
  (state: DogState) => selectAll(state)
);

export const getDogEntities = createSelector(
  getDogState,
  (state: DogState) => selectEntities(state)
);

export const getSelectedDogId = createSelector(
  getDogState,
  (state: DogState) => state.selectedId
);

export const getSelectedDog = createSelector(
  getDogEntities,
  getSelectedDogId,
  (entities, selectedId) => (selectedId && entities[selectedId]) || emptyDog
)

