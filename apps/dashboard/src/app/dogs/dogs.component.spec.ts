import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DogFacade } from '@pets/core-state';
import { mockDog, emptyDog, mockDogFacade } from '@pets/testing';
import { DogsComponent } from './dogs.component';

/* Unit Testing References (https://jestjs.io/docs/getting-started)

  describe:
    usage: describe(name, fn): creates a block that groups together several related tests.
    example: describe('someMethod', () => { ... method specific tests })

  it:
    usage: it(name, fn): performs individual test
    example: it('explanation of test', () => { ... test body })

  spyOn:
    usage: jest.spyOn(object, methodName): Creates a mock function, and observes calls to method
    example: jest.spyOn(facade, 'selectMethod')

  expect:
    usage: expect(value).matcher(value): Runs assertion within test (fail/pass)
    example: expect(true).toBeTrue()

*/

/* Declare mutable references (re-instantiated before each test) */
describe('DogsComponent', () => {
  let component: DogsComponent;
  let fixture: ComponentFixture<DogsComponent>;
  let dogsFacade: DogFacade

  /* Prevision Testbed with required dependencies and mocked providers */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DogsComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: DogFacade,
          useValue: mockDogFacade
        }
      ]
    })
    .overrideTemplate(DogsComponent, '')
    .compileComponents();
  });

  /* Instantiate new references before each test */
  beforeEach(() => {
    fixture = TestBed.createComponent(DogsComponent);
    component = fixture.componentInstance;
    dogsFacade = TestBed.inject(DogFacade);
    fixture.detectChanges();
  });

  /* Test declarations (asserting functionality) */

  // 0: component compiles
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 1: selectDog()
  describe('#selectDog', () => {
    it('should call facade method `selectDog` with argument of dog.id', () => {
      jest.spyOn(dogsFacade, 'selectDog');

      component.selectDog(mockDog);

      expect(dogsFacade.selectDog).toHaveBeenCalledWith(mockDog.id);
    })

    it('should patch form with passed dog', () => {
      component.selectDog(mockDog);

      expect(component.form.value).toEqual(mockDog);
    })
  })

  // 2: deleteDog()
  describe('#deleteDog', () => {
    it('should call facade method `deleteDog` with an argument of dog', () =>{
      jest.spyOn(dogsFacade, 'deleteDog');

      component.deleteDog(mockDog);

      expect(dogsFacade.deleteDog).toHaveBeenCalledWith(mockDog);
    } )
  })

  // 3: saveDog()
  describe('#saveDog', () => {
    it('should call facade method `saveDog` with an argument of dog', () => {
      jest.spyOn(dogsFacade, 'saveDog');

      component.saveDog(mockDog);

      expect(dogsFacade.saveDog).toHaveBeenCalledWith(mockDog);
    } )
  })

  // 4: resetDog()
  describe('#resetDog', () => {
    it('should call the FormGroup method `reset`', () => {
      jest.spyOn(component.form, 'reset');
      component.form.reset();
      expect(component.form.reset).toHaveBeenCalledWith();
    }) 
    it('should call component method `selectDog` with an argument of emptyDog', () => {
      jest.spyOn(component, 'selectDog');
      component.selectDog(emptyDog);
      expect(component.selectDog).toHaveBeenCalledWith(emptyDog)
    })
  })
});
