import { of } from "rxjs"

export const emptyDog = {
  id: '',
  name: '',
  breed: ''
}

export const mockDog = {
  id: '1',
  name: 'mock dog',
  breed: 'mock breed'
}

export const mockDogFacade = {
  mutations$: of(),
  loadDogs: () => {},
  selectDog: () => {},
  saveDog: () => {},
  deleteDog: () => {}
}
